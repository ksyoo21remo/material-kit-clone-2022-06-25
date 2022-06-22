import React, { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
} from "@mui/material";
import SignUpForm from "./SignUpForm";
import { paths } from "../../../paths";

interface SignUpBodyProps {
  currentTab: number;
  currentTypeAdmin: string;
  type?: number;
}

function SignUpBody(props: PropsWithChildren<SignUpBodyProps>) {
  const { currentTab, currentTypeAdmin, type } = props;

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
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: "60px",
              md: "120px",
            },
          }}
        >
          <Card elevation={16} sx={{ p: 4 }}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">{currentTypeAdmin}</Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3,
              }}
            >
              <SignUpForm type={type} />
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box>
              <RouterLink
                to={paths.home + paths.signIn}
                state={{ type: type ?? currentTab }}
              >
                기존 계정으로 로그인
              </RouterLink>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default SignUpBody;
