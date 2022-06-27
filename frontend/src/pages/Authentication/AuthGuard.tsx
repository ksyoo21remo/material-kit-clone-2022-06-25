import PropTypes from "prop-types";
import React, { PropsWithChildren, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { paths } from "../../paths";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard(
  props: PropsWithChildren<AuthGuardProps>,
) {
  const { children } = props;
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return (
      <Navigate
        to={`/${paths.dashboard.root}/${paths.dashboard.overview}`}
        replace={true}
      />
    );
  }

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
};
