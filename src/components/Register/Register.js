import React from "react";
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
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../feature/auth/AuthActions";

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { inputError } = useSelector((state) => state.inputError);
  const initialValues = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  }

  const onSubmit = (values) => {
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
    referral: Yup.string().min(6).max(6).required("Referral code is required"),
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
          <RegisterButton
          type="submit"
          primary={"primary"}
        >
          Login
        </RegisterButton>
        </RegisterForm>
      </RegisterTextContainer>
    </RegisterContainer>
  );
};

export default Register;
