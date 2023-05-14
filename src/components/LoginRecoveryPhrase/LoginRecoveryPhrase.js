import React from "react";
import {
  LoginRecoveryPhraseContainer,
  LoginRecoveryPhraseTextContainer,
  LoginRecoveryPhraseTextHeader,
  LoginRecoveryPhraseText,
  LoginRecoveryPhraseTextArea,
  LoginRecoveryPhraseButtonLayout,
  LoginRecoveryPhraseButton,
} from "./LoginRecoveryPhrase.styled";
import { Link } from "react-router-dom";

function LoginRecoveryPhrase() {
  return (
    <LoginRecoveryPhraseContainer>
      <LoginRecoveryPhraseTextContainer>
        <LoginRecoveryPhraseTextHeader>
          Sign in with recovery phrase
        </LoginRecoveryPhraseTextHeader>
        <LoginRecoveryPhraseText>
          This is a 12 word phrase you were given when you created your previous
          wallet.
          <br />
          <a href="/" style={{ color: "#1652F0", textDecoration: "none" }}>
            Learn more.
          </a>
        </LoginRecoveryPhraseText>
        <LoginRecoveryPhraseTextArea
          placeholder="Recovery phrase...."
          type="text"
          cols="40"
          rows="5"
        />
      </LoginRecoveryPhraseTextContainer>
      <LoginRecoveryPhraseButtonLayout>
        <LoginRecoveryPhraseButton
          primary={"primary"}
          as={Link}
          to="/dashboard"
        >
          Next
        </LoginRecoveryPhraseButton>
      </LoginRecoveryPhraseButtonLayout>
    </LoginRecoveryPhraseContainer>
  );
}

export default LoginRecoveryPhrase;
