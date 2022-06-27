import PropTypes from "prop-types";
import React, { PropsWithChildren, ReactNode } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { paths } from "../../paths";

interface GuestGuardProps {
  children: ReactNode;
}

export default function GuestGuard(
  props: PropsWithChildren<GuestGuardProps>,
) {
  const { children } = props;
  const isAuthenticated =
    window.localStorage.getItem("accessToken") !== null;
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const disableGuard = searchParams.get("disableGuard");

  // You should remove the "disableGuard" check, because it's meant to be used only in the demo.
  if (!isAuthenticated && disableGuard !== "true") {
    return (
      <Navigate
        to={`/${paths.authentication.root}/${paths.authentication.signIn}`}
        replace={true}
      />
    );
  }

  return <>{children}</>;
}

GuestGuard.propTypes = {
  children: PropTypes.node,
};
