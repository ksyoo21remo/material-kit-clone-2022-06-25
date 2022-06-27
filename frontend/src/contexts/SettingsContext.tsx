import PropTypes from "prop-types";
import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";

export interface Settings {
  direction?: "ltr" | "rtl";
  responsiveFontSizes?: boolean;
  theme: "light" | "dark";
}

export interface SettingsContextValue {
  settings: Settings;
  // eslint-disable-next-line
  saveSettings: (update: Settings) => void;
}

const initialSettings: Settings = {
  direction: "ltr",
  responsiveFontSizes: true,
  theme: "light",
};

export const SettingsContext = createContext<SettingsContextValue>({
  settings: initialSettings,
  saveSettings: () => {},
});

interface SettingsProviderProps {
  children?: ReactNode;
}

export const restoreSettings = (): Settings | null => {
  let settings = null;

  try {
    const storedData: string | null =
      globalThis.localStorage.getItem("settings");

    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        direction: "ltr",
        responsiveFontSizes: true,
        theme: globalThis.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light",
      };
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a strigified JSON this will fail,
    // that's why we catch the error
  }

  return settings;
};

export const storeSettings = (settings: Settings): void => {
  globalThis.localStorage.setItem(
    "settings",
    JSON.stringify(settings),
  );
};

export function SettingsProvider(
  props: PropsWithChildren<SettingsProviderProps>,
) {
  const { children } = props;
  const [settings, setSettings] = useState<Settings>(initialSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updatedSettings: Settings): void => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
