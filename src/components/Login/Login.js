import React from "react";
import {
  LoginContainer,
  LoginPicture,
  LoginTextContainer,
  LoginTextHeader,
  LoginText,
  LoginButtonLayout,
  LoginButton,
} from "./Login.styled";
import { Link } from "react-router-dom";
import login from "../../assets/login.png";

const Login = () => {
  return (
    <LoginContainer>
      <LoginPicture src={login} />
      <LoginTextContainer>
        <LoginTextHeader>Restore wallet</LoginTextHeader>
        <LoginText>
          Restore your wallet with the 12 word recovery phrase or with Google
          Drive
        </LoginText>
      </LoginTextContainer>
      <LoginButtonLayout>
        <LoginButton
          primary={"primary"}
          onClick={() => {
            console.log("Back up seedphrase");
          }}
        >
          Restore from Google Drive
        </LoginButton>
        <LoginButton as={Link} to="/login-recovery-phrase">
          Restore with rescovery phrase
        </LoginButton>
      </LoginButtonLayout>
    </LoginContainer>
  );
};

export default Login;
