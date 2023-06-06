import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, logoutUser } from "../../feature/auth/AuthActions";
import { clearMessage } from "../../feature/message/messageSlice";
import { clearInputError } from "../../feature/inputError/inputErrorSlice";
import { AuthButton, AuthContainer, AuthForm, AuthHeader, AuthInput, AuthLabel, FormError, FormHeader, FormWrapper } from "./ChangePassword.styled";

const ChangePassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const { inputError } = useSelector((state) => state.inputError);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const dispatch = useDispatch();

  const initialValues = {
    old_password: "",
    new_password1: "",
    new_password2: "",
  };

  const onSubmit = (values) => {
    dispatch(changePassword(values))
      .unwrap()
      .then((res) => {
        setPasswordChanged(true);
        dispatch(logoutUser({}));
      })
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    old_password: Yup.string().required("Old password is required"),
    new_password1: Yup.string().required("Password is required"),
    new_password2: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("new_password1"), null], "Password Must Match"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    dispatch(clearMessage());
    dispatch(clearInputError());
  }, [dispatch]);

  

  return (
    <>
      {passwordChanged ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 300px)",
          }}
        >
          <svg
            style={{ marginBlockStart: "auto" }}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#1652f0" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.3693 40.8475L45.3623 61.8545L33.6328 50.1251L36.3434 47.4144L45.3623 56.4334L63.6587 38.137L66.3693 40.8475Z"
              fill="white"
            />
          </svg>
          <h4>Password Changed Successful</h4>
          <a style={{ marginBlockStart: "auto", color: "#1652f0", textDecoration: "none" }} href="/login">
            Go Back To Login
          </a>
        </div>
      ) : (
        <AuthContainer>
          <AuthHeader style={{ marginBlockEnd: "50px" }}>
            Change Password
          </AuthHeader>
          <AuthForm onSubmit={formik.handleSubmit}>
            <FormHeader>Enter and confirm password</FormHeader>
            <FormError>
              {inputError !== undefined
                ? inputError.new_password2
                  ? inputError.new_password2
                  : null
                : null}
              {inputError !== undefined
                ? inputError.old_password
                  ? inputError.old_password
                  : null
                : null}
            </FormError>
            <FormWrapper>
              <AuthLabel>Old Password</AuthLabel>
              <AuthInput
                type="password"
                name="old_password"
                placeholder="old password"
                onChange={formik.handleChange}
                value={formik.values.old_password}
              />
              {formik.errors.old_password ? (
                <FormError>{formik.errors.old_password}</FormError>
              ) : null}
            </FormWrapper>
            <FormWrapper>
              <AuthLabel>New Password</AuthLabel>
              <AuthInput
                type="password"
                name="new_password1"
                placeholder="new password"
                onChange={formik.handleChange}
                value={formik.values.new_password1}
              />
              {formik.errors.new_password1 ? (
                <FormError>{formik.errors.new_password1}</FormError>
              ) : null}
            </FormWrapper>
            <FormWrapper>
              <AuthLabel>Confirm New Password</AuthLabel>
              <AuthInput
                type="password"
                name="new_password2"
                placeholder="confirm new password"
                onChange={formik.handleChange}
                value={formik.values.new_password2}
              />
              {formik.errors.new_password2 ? (
                <FormError>{formik.errors.new_password2}</FormError>
              ) : null}
            </FormWrapper>
            <AuthButton type="submit" disabled={loading}>
              {loading ? "Loading" : "Change"}
            </AuthButton>
          </AuthForm>
        </AuthContainer>
      )}
    </>
  );
};

export default ChangePassword;
