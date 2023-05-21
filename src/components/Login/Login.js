import React from "react";
import {
  LoginContainer,
  LoginPicture,
  LoginTextContainer,
  LoginTextHeader,
  // LoginText,
  LoginButtonLayout,
  LoginButton,
  LoginFormWrapper,
} from "./Login.styled";
import { Link } from "react-router-dom";
import login from "../../assets/login.png";

const Login = () => {
  return (
    <LoginContainer>
      <LoginPicture src={login} />
      <LoginTextContainer>
        <LoginTextHeader>Login to wallet</LoginTextHeader>
        {/* <LoginText>
          Restore your wallet with the 12 word recovery phrase or with Google
          Drive
        </LoginText> */}
        <form>
          <LoginFormWrapper>
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" />
          </LoginFormWrapper>
          <LoginFormWrapper>
            <label>Password</label>
            <input type="password" name="password" placeholder="password" />
          </LoginFormWrapper>
          <LoginButton
          primary={"primary"}
          onClick={() => {
            console.log("Back up seedphrase");
          }}
        >
          Login
        </LoginButton>
        </form>
      </LoginTextContainer>
    </LoginContainer>
  );
};

export default Login;
