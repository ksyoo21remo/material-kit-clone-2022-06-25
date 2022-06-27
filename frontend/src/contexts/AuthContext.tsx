import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { authApi } from "../__fake-api__/authApi";
import type { User } from "../types/User";
import { Platform } from "../pages/Authentication/platformIcons";

export interface AuthContextValue extends State {
  platform: Platform;
  // eslint-disable-next-line
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  // eslint-disable-next-line
  register: (email: string, name: string, password: string) => Promise<void>;
}

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

export const AuthContext = createContext<AuthContextValue>({
  ...initialState,
  platform: "JWT",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

interface AuthProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line
enum ActionType {
  // eslint-disable-next-line
  INITIALIZE = "INITIALIZE",
  // eslint-disable-next-line
  LOGIN = "LOGIN",
  // eslint-disable-next-line
  LOGOUT = "LOGOUT",
  // eslint-disable-next-line
  REGISTER = "REGISTER",
}

type InitializeAction = {
  type: ActionType.INITIALIZE;
  payload: {
    isAuthenticated: boolean;
    user: User | null;
  };
};

type LoginAction = {
  type: ActionType.LOGIN;
  payload: {
    user: User;
  };
};

type LogoutAction = {
  type: ActionType.LOGOUT;
};

type RegisterAction = {
  type: ActionType.REGISTER;
  payload: {
    user: User;
  };
};

type Action =
  | InitializeAction
  | LoginAction
  | LogoutAction
  | RegisterAction;

// eslint-disable-next-line
type Handler = (state: State, action: any) => State;

const handlers: Record<ActionType, Handler> = {
  INITIALIZE: (state: State, action: InitializeAction): State => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state: State, action: LoginAction): State => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state: State): State => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state: State, action: RegisterAction): State => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state: State, action: Action): State =>
  handlers[action.type]
    ? handlers[action.type](state, action)
    : state;

export function AuthProvider(
  props: PropsWithChildren<AuthProviderProps>,
) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function initialize(): Promise<void> {
      try {
        const accessToken =
          window.localStorage.getItem("accessToken");
        if (accessToken) {
          const user = await authApi.me(accessToken);

          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: ActionType.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    }

    initialize();
  }, []);

  async function login(
    email: string,
    password: string,
  ): Promise<void> {
    const accessToken = await authApi.login({ email, password });
    const user = await authApi.me(accessToken);

    localStorage.setItem("accessToken", accessToken);

    dispatch({
      type: ActionType.LOGIN,
      payload: {
        user,
      },
    });
  }

  async function logout(): Promise<void> {
    localStorage.removeItem("accessToken");
    dispatch({ type: ActionType.LOGOUT });
  }

  async function register(
    email: string,
    name: string,
    password: string,
  ): Promise<void> {
    const accessToken = await authApi.register({
      email,
      name,
      password,
    });
    const user = await authApi.me(accessToken);

    localStorage.setItem("accessToken", accessToken);

    dispatch({
      type: ActionType.REGISTER,
      payload: {
        user,
      },
    });
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        platform: "JWT",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
