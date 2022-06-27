import {
  Box,
  Card,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Link as RouterLink,
  useSearchParams,
} from "react-router-dom";
import SignInForm from "./SignInForm";
import AuthBanner from "../AuthBanner";
import { Platform, platformIcons } from "../platformIcons";
import { Logo } from "../../../components/Logo";
import { useAuth } from "../../../hooks/useAuth";
import { paths } from "../../../paths";

export default function SignIn() {
  const { platform }: { platform: Platform } = useAuth();
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const disableGuard = searchParams.get("disableGuard");

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <AuthBanner />
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: "60px",
              md: "120px",
            },
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "neutral.900"
                  : "neutral.100",
              borderColor: "divider",
              borderRadius: 1,
              borderStyle: "solid",
              borderWidth: 1,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              mb: 4,
              p: 2,
              "& > img": {
                height: 32,
                width: "auto",
                flexGrow: 0,
                flexShrink: 0,
              },
            }}
          >
            <Typography color="textSecondary" variant="caption">
              The app authenticates via {platform}
            </Typography>
            <img alt="Auth platform" src={platformIcons[platform]} />
          </Box>
          <Card elevation={16} sx={{ p: 4 }}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <RouterLink to="/">
                <Logo
                  sx={{
                    height: 40,
                    width: 40,
                  }}
                />
              </RouterLink>
              <Typography variant="h4">Log in</Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 2 }}
                variant="body2"
              >
                Sign in on the internal platform
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3,
              }}
            >
              <SignInForm />
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box>
              <RouterLink
                to={
                  disableGuard
                    ? `/${paths.authentication.root}/${paths.authentication.signUp}?disableGuard=${disableGuard}`
                    : `/${paths.authentication.root}/${paths.authentication.signUp}`
                }
              >
                <Typography color="textSecondary" variant="body2">
                  Create new account
                </Typography>
              </RouterLink>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}
