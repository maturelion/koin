import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding-top: 30px;
  margin-inline: 10px;

  @media only screen and (min-width: 501px) {
    width: 500px;
    margin-inline: auto;
  }
`;

export const AuthForm = styled.form`
  /* width: 90%; */
  /* margin-inline: auto; */
`;

export const AuthHeader = styled.div`
  font-weight: bolder;
  font-size: larger;
  margin-block: 10% 30%;
`;

export const FormHeader = styled.div`
  font-weight: bold;
  margin-block-end: 10px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin-block: 5px 15px;
`;

export const AuthLabel = styled.label`
  font-weight: bold;
`;

export const AuthInput = styled.input`
  width: fill-available;
  outline: transparent;
  border: 1px solid #1652f0;
  height: 40px;
  padding-inline: 10px;

  &:focus {
    outline: 1px solid #0a49ee;
  }
`;

export const FormError = styled.div`
  width: 100%;
  text-align: center;
  color: tomato;
  font-size: small;
  height: fit-content;
  margin-top: 10px;
`;

export const AuthButton = styled.button`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1652f0;
  color: #ffffff;
  border: none;
  height: 40px;
  width: 100%;
`;

export const AuthRedirectText = styled.span`
  display: flex;
  justify-content: center;

  & > a {
    margin-inline-start: 5px;
  }
`;
