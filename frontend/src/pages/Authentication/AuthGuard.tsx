import PropTypes from "prop-types";
import React, { PropsWithChildren, ReactNode } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { paths } from "../../paths";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard(
  props: PropsWithChildren<AuthGuardProps>,
) {
  const { children } = props;
  const isAuthenticated =
    window.localStorage.getItem("accessToken") !== null;
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const disableGuard = searchParams.get("disableGuard");

  if (isAuthenticated && disableGuard !== "true") {
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
