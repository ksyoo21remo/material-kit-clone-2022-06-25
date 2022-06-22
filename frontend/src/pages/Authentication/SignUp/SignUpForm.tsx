import React, { PropsWithChildren } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormHelperText,
  TextField,
} from "@mui/material";

interface SignUpFormProps {
  type?: number;
}

function SignUpForm(props: PropsWithChildren<SignUpFormProps>) {
  const { type } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      loginId: "",
      password: "",
      passwordAgain: "",
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "최소 2글자  입력해주세요")
        .max(255, "최대 255글자까지 가능합니다")
        .required("이름을 입력해주세요"),
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
        .min(8, "최소 8글자 이상으로 입력해주세요")
        .max(255, "최대 255글자까지 가능합니다")
        .oneOf(
          [Yup.ref("passwordAgain")],
          "비밀번호 확인이 일치하지 않습니다",
        ),
      passwordAgain: Yup.string()
        .required("비밀번호를 반드시 입랙해주세요")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "알파벳, 숫자의 조합, 8글자 이상으로 입력해주세요",
        )
        .min(8, "최소 8글자 이상으로 입력해주세요")
        .max(255, "최대 255글자까지 가능합니다")
        .oneOf(
          [Yup.ref("password")],
          "비밀번호 확인이 일치하지 않습니다",
        ),
    }),
    onSubmit: async (values, formikHelpers): Promise<void> => {
      alert(
        `타입 ${type} 관리자 가입` +
          "\n" +
          `values ${JSON.stringify(values, null, 2)}`,
      );
      formikHelpers.setSubmitting(false);
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit} {...props}>
      <TextField
        error={Boolean(formik.touched.name && formik.errors.name)}
        fullWidth
        helperText={formik.touched.name && formik.errors.name}
        label="이름"
        placeholder="2글자 이상"
        margin="normal"
        name="name"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
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
        type="email"
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
      <TextField
        error={Boolean(
          formik.touched.passwordAgain && formik.errors.passwordAgain,
        )}
        fullWidth
        helperText={
          formik.touched.passwordAgain && formik.errors.passwordAgain
        }
        label="비밀번호 확인"
        placeholder="알파벳, 숫자의 조합, 8글자 이상"
        margin="normal"
        name="passwordAgain"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        type="password"
        value={formik.values.passwordAgain}
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
          회원가입
        </Button>
      </Box>
    </form>
  );
}

export default SignUpForm;
