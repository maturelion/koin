import React from "react";
import {
  CreateContainer,
  CreateAccountPicture,
  CreateAccountTextContainer,
  CreateAccountTextHeader,
  CreateAccountText,
  CreateAccountFormContainer,
  CreateAccountForm,
  CreateAccountButton,
} from "./CreateAccount.styled";
import create_user from "../../assets/create_user.png";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <CreateContainer>
      <CreateAccountPicture src={create_user} />
      <CreateAccountTextContainer>
        <CreateAccountTextHeader>Pick your username</CreateAccountTextHeader>
        <CreateAccountText>
          This is how other Wallet users can find you and send you payments
        </CreateAccountText>
      </CreateAccountTextContainer>
      <CreateAccountFormContainer>
        <CreateAccountForm
          placeholder="username"
          type="text"
          name="username"
        ></CreateAccountForm>
        <CreateAccountButton
          primary={"primary"}
          as={Link}
          to="/recovery-phrase"
        >
          Next
        </CreateAccountButton>
      </CreateAccountFormContainer>
    </CreateContainer>
  );
};

export default CreateAccount;
