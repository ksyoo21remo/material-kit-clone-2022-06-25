import React, { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
} from "@mui/material";
import SignInForm from "./SignInForm";
import { paths } from "../../../paths";

interface SignInBodyProps {
  currentTypeAdmin: string;
  type: number;
}

function SignInBody(props: PropsWithChildren<SignInBodyProps>) {
  const { currentTypeAdmin, type } = props;

  return (
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
            <SignInForm type={type} />
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box>
            <RouterLink
              to={paths.home + paths.signUp}
              state={{ type }}
            >
              새로운 계정 생성
            </RouterLink>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default SignInBody;
