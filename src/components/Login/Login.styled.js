import styled from "styled-components";
import { Button } from "../Components.styled";

export const LoginContainer = styled.div``;

export const LoginPicture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;

export const LoginTextContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginTextHeader = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-block-end: 10px;

  color: #1f2533;
`;

export const LoginText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #4f5c6c;
`;

export const LoginForm = styled.form`
  margin-top: 30px;
`

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 20px;

  & > label{
    margin-bottom: 10px;
  }
`

export const LoginInput = styled.input`
  height: 40px;
  outline: none;
  
  
  &:focus {
    outline: 1px solid #0a49ee;
  }
`

export const FormError = styled.div`
    width: 100%;
    text-align: center;
    color: tomato;
    font-size: small;
    height: fit-content;
    margin-top: 10px;
`

export const LoginButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

export const LoginButton = styled(Button)`
  cursor: pointer;
`;
