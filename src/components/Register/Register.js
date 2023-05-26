import React, { useEffect } from "react";
import {
  RegisterContainer,
  RegisterPicture,
  RegisterTextContainer,
  RegisterTextHeader,
  // RegisterText,
  // RegisterButtonLayout,
  RegisterButton,
  RegisterFormWrapper,
  RegisterInput,
  RegisterForm,
  FormError,
} from "./Register.styled";
// import { Link } from "react-router-dom";
import login from "../../assets/login.png";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../feature/auth/AuthActions";
import ReactLoading from 'react-loading';
import { clearMessage } from "../../feature/message/messageSlice";
import { clearInputError } from "../../feature/inputError/inputErrorSlice";

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, success } = useSelector(
    (state) => state.auth
  )
  const { message } = useSelector((state) => state.message);
  const { inputError } = useSelector((state) => state.inputError);
  const initialValues = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  }

  useEffect(() => {
    dispatch(clearMessage());
    dispatch(clearInputError());
  }, [dispatch]);

  useEffect(() => {
    success && navigate("/login")  
  }, [navigate, success])

  const onSubmit = (values) => {
    console.log(values)
    dispatch(registerUser(values)).unwrap().then(res => navigate("/login"))
  }

  const validationSchema = Yup.object({
    username: Yup.string()
    .min(5, `Username must be ${5}`)
    .required("Username is required"),
    email: Yup.string().email().required("Email is required"),
    password1: Yup.string().required("Password1 is required"),
    password2: Yup.string()
      .required("Repeat Password is Required")
      .oneOf([Yup.ref("password1"), null], "Password Must Match"),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <RegisterContainer>
      <RegisterPicture src={login} />
      <RegisterTextContainer>
        <RegisterTextHeader>Register</RegisterTextHeader>
        <RegisterForm onSubmit={formik.handleSubmit}>
        {message && <FormError>{message}</FormError>}
          <RegisterFormWrapper>
            <label>Username</label>
            <RegisterInput 
              type="text"
              name="username"
              placeholder="Username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? <FormError>{formik.errors.username}</FormError> : null}
            <FormError>
            {inputError !== undefined
              ? inputError.username
                ? inputError.username
                : null
              : null}
          </FormError>
          </RegisterFormWrapper>
          <RegisterFormWrapper>
            <label>Email</label>
            <RegisterInput 
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <FormError>{formik.errors.email}</FormError> : null}
            <FormError>
            {inputError !== undefined
              ? inputError.email
                ? inputError.email
                : null
              : null}
          </FormError>
          </RegisterFormWrapper>
          <RegisterFormWrapper>
            <label>Password</label>
            <RegisterInput
              type="password"
              name="password1"
              placeholder="password"
              onChange={formik.handleChange}
              value={formik.values.password1}
            />
            {formik.errors.password1 ? <FormError>{formik.errors.password1}</FormError> : null}
            <FormError>
            {inputError !== undefined
              ? inputError.non_field_errors
                ? inputError.non_field_errors
                : null
              : null}
          </FormError>
          <FormError>
            {inputError !== undefined
              ? inputError.password1
                ? inputError.password1
                : null
              : null}
          </FormError>
          </RegisterFormWrapper>
          <RegisterFormWrapper>
            <label>Confirm Password</label>
            <RegisterInput
              type="password"
              name="password2"
              placeholder="confirm password"
              onChange={formik.handleChange}
              value={formik.values.password2}
            />
            {formik.errors.password2 ? <FormError>{formik.errors.password2}</FormError> : null}
          </RegisterFormWrapper>
          <RegisterButton type='submit' primary={"primary"} disabled={loading}>{loading ? <ReactLoading type={"spinningBubbles"} height={'20px'} width={'20px'} /> : "Register"}</RegisterButton>
          <RegisterButton type="button" style={{color: "black"}}>Already have an account? <Link style={{textDecoration: "none", color: "blue", marginInlineStart: "5px"}} to="/login">Login</Link></RegisterButton>
        </RegisterForm>
      </RegisterTextContainer>
    </RegisterContainer>
  );
};

export default Register;
