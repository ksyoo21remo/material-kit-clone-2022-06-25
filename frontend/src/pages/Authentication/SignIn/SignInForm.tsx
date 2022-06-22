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
import SignInApiExecutorBuilder from "./SignInApiExecutorBuilder";
import { SignInParam } from "./types";

interface SignInFormProps {
  type: number;
}

function SignInForm(props: PropsWithChildren<SignInFormProps>) {
  const { type } = props;

  const formik = useFormik({
    initialValues: {
      loginId: "01012345678",
      password: "Password123",
      submit: null,
    },
    validationSchema: Yup.object({
      loginId: Yup.string()
        .required("아이디(휴대전화 번호)를 반드시 입력해주세요")
        .matches(
          /\d{11}/,
          "휴대전화 번호 형식(예: 01012345678)으로 입력해주세요",
        )
        .length(11, "정확하게 11글자로 입력해주세요"),
      password: Yup.string()
        .required("비밀번호를 반드시 입랙해주세요")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "알파벳, 숫자의 조합, 8글자 이상으로 입력해주세요",
        )
        .min(8, "최소 8글자로 입력해주세요")
        .max(255, "최대 255글자까지 가능합니다"),
    }),
    onSubmit: async (values, formikHelpers) => {
      const signInArgs: SignInParam = {
        loginid: values.loginId,
        password: values.password,
      };
      try {
        const signInBuilder = new SignInApiExecutorBuilder(type);
        const signInApi = signInBuilder.build();
        const data = await signInApi.request(signInArgs);
        const { uuid, accessToken, refreshToken } = data;
        if (!accessToken) {
          throw new Error(
            "관리자 " + `${type}` + " 로그인 잘못된 액세스 토큰",
          );
        }
        globalThis.localStorage.setItem("uuid", uuid);
        globalThis.localStorage.setItem("accessToken", accessToken);
        globalThis.localStorage.setItem("refreshToken", refreshToken);
        globalThis.localStorage.setItem("type", type.toString());
        formikHelpers.setStatus({ success: true });
      } catch (err) {
        formikHelpers.setStatus({ success: false });
        if (err instanceof Error) {
          formikHelpers.setErrors({ submit: err.message });
          return;
        }
        formikHelpers.setErrors({ submit: "알 수 없는 오류 발생" });
      } finally {
        formikHelpers.setSubmitting(false);
      }
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <TextField
        autoFocus
        error={Boolean(
          formik.touched.loginId && formik.errors.loginId,
        )}
        fullWidth
        helperText={formik.touched.loginId && formik.errors.loginId}
        label="아이디(휴대전화 번호)"
        placeholder="01012345678 형식"
        margin="normal"
        name="loginId"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="text"
        value={formik.values.loginId}
      />
      <TextField
        error={Boolean(
          formik.touched.password && formik.errors.password,
        )}
        fullWidth
        helperText={formik.touched.password && formik.errors.password}
        label="비밀번호"
        placeholder="알파벳, 숫자의 조합, 8글자 이상"
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
            테스트용 아이디 <b>01012345678</b>,
          </div>
          <div>
            테스트용 비밀번호 <b>Password123</b> 사용 가능
          </div>
        </Alert>
      </Box>
    </form>
  );
}

export default SignInForm;
