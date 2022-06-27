import { useContext } from "react";
import {
  AuthContext,
  AuthContextValue,
} from "../contexts/AuthContext";

export const useAuth = () =>
  useContext(AuthContext) as AuthContextValue;
