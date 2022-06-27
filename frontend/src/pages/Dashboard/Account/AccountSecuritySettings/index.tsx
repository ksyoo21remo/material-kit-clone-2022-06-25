import React from "react";
import ChangePassword from "./ChangePassword";
import LoginHistory from "./LoginHistory";
import MultiFactorAuthentication from "./MultiFactorAuthentication";

export default function AccountSecuritySettings() {
  return (
    <>
      <ChangePassword />
      <MultiFactorAuthentication />
      <LoginHistory />
    </>
  );
}
