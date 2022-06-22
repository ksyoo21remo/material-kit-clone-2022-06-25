import React from "react";
import {
  Box,
  Card,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import LoginForm from "./LoginForm";

function Login() {
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
            <Typography variant="h4">로그인</Typography>
            <Typography
              color="textSecondary"
              sx={{ mt: 2 }}
              variant="body2"
            >
              내부 플랫폼에 로그인
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              mt: 3,
            }}
          >
            <LoginForm />
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box>
            <Link color="textSecondary" variant="body2">
              새로운 계정 생성
            </Link>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Link color="textSecondary" variant="body2">
              비밀번호 찾기
            </Link>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default Login;
