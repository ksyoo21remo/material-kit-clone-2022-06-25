import { useContext } from "react";
import {
  SettingsContext,
  SettingsContextValue,
} from "../contexts/SettingsContext";

export const useSettings = () =>
  useContext(SettingsContext) as SettingsContextValue;
