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
import SignUpForm from "./SignUpForm";
import AuthBanner from "../AuthBanner";
import { Platform, platformIcons } from "../platformIcons";
import { useAuth } from "../../../hooks/useAuth";
import { Logo } from "../../../widgets/Logo";
import { paths } from "../../../paths";

export default function SignUp() {
  const { platform }: { platform: Platform } = useAuth();
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  // eslint-disable-next-line
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
              <Typography variant="h4">Register</Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 2 }}
                variant="body2"
              >
                Register on the internal platform
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3,
              }}
            >
              <SignUpForm />
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box>
              <RouterLink
                to={
                  disableGuard
                    ? `/${paths.authentication.root}/${paths.authentication.signIn}?disableGuard=${disableGuard}`
                    : `/${paths.authentication.root}/${paths.authentication.signIn}`
                }
              >
                <Typography color="textSecondary" variant="body2">
                  Having an account
                </Typography>
              </RouterLink>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}
