import React, { useEffect } from "react";
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
import ReactLoading from 'react-loading';
import login from "../../assets/login.png";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../feature/auth/AuthActions";
import { clearMessage } from "../../feature/message/messageSlice";
import { clearInputError } from "../../feature/inputError/inputErrorSlice";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { inputError } = useSelector((state) => state.inputError);
  const { loading } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    dispatch(clearMessage());
    dispatch(clearInputError());
  }, [dispatch]);

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
        <FormError>{inputError !== undefined ? (inputError.non_field_errors ? inputError.non_field_errors : null) : null}</FormError>
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
          
        <LoginButton type='submit' primary={"primary"} disabled={loading}>{loading ? <ReactLoading type={"spinningBubbles"} height={'20px'} width={'20px'} /> : "Login"}</LoginButton>
        <LoginButton type="button" style={{color: "black"}}>Dont't have an account? <Link style={{textDecoration: "none", color: "blue", marginInlineStart: "5px"}} to="/register">Register</Link></LoginButton>
        </LoginForm>
      </LoginTextContainer>
    </LoginContainer>
  );
};

export default Login;
