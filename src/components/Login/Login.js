import React from "react";
import {
  LoginContainer,
  LoginPicture,
  LoginTextContainer,
  LoginTextHeader,
  // LoginText,
  // LoginButtonLayout,
  LoginButton,
  LoginFormWrapper,
  LoginInput,
  LoginForm,
  FormError,
} from "./Login.styled";
// import { Link } from "react-router-dom";
import login from "../../assets/login.png";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../feature/auth/AuthActions";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    password: ""
  }

  const onSubmit = (values) => {
    dispatch(loginUser(values)).unwrap().then(res => navigate("/dashboard"))
  }

  const validationSchema = Yup.object({
    username: Yup.string().min(4, `Username must be ${5}`).required("Username is required"),
    password: Yup.string().required("Password is required"),
  })
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <LoginContainer>
      <LoginPicture src={login} />
      <LoginTextContainer>
        <LoginTextHeader>Login to wallet</LoginTextHeader>
        <LoginForm onSubmit={formik.handleSubmit}>
          <LoginFormWrapper>
            <label>Username</label>
            <LoginInput 
              type="text"
              name="username"
              placeholder="Username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? <FormError>{formik.errors.username}</FormError> : null}
          </LoginFormWrapper>
          <LoginFormWrapper>
            <label>Password</label>
            <LoginInput
              type="password"
              name="password"
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <FormError>{formik.errors.password}</FormError> : null}
          </LoginFormWrapper>
          <LoginButton
          type="submit"
          primary={"primary"}
        >
          Login
        </LoginButton>
        </LoginForm>
      </LoginTextContainer>
    </LoginContainer>
  );
};

export default Login;
