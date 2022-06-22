import React, { PropsWithChildren } from "react";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginForm(props: PropsWithChildren<{}>) {
  const formik = useFormik({
    initialValues: {
      email: "demo@devias.io",
      password: "Password123!",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string()
        .max(255)
        .required("Password is required"),
    }),
    onSubmit: (values, formikHelpers) => {
      alert(
        "clicked sign-in button with\n" +
          `values ${JSON.stringify(values, null, 2)}`,
      );
      formikHelpers.setSubmitting(false);
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <TextField
        autoFocus
        error={Boolean(formik.touched.email && formik.errors.email)}
        fullWidth
        helperText={formik.touched.email && formik.errors.email}
        label="Email Address"
        margin="normal"
        name="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="email"
        value={formik.values.email}
      />
      <TextField
        error={Boolean(
          formik.touched.password && formik.errors.password,
        )}
        fullWidth
        helperText={formik.touched.password && formik.errors.password}
        label="Password"
        margin="normal"
        name="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.password}
      />
      {formik.errors.submit && (
        <Box sx={{ mt: 3 }}>
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Box>
      )}
      <Box sx={{ mt: 2 }}>
        <Button
          disabled={formik.isSubmitting}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          로그인
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Alert severity="info">
          <div>
            테스트용 아이디 <b>demo@devias.io</b>,
          </div>
          <div>
            테스트용 비밀번호 <b>Password123!</b> 사용 가능
          </div>
        </Alert>
      </Box>
    </form>
  );
}

export default LoginForm;
