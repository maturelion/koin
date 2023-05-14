import styled from "styled-components";
import { Button } from "../Components.styled";

export const CreateContainer = styled.div``;

export const CreateAccountPicture = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -2;
`;

export const CreateAccountTextContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CreateAccountTextHeader = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-block-end: 10px;

  color: #1f2533;
`;

export const CreateAccountText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #4f5c6c;
`;

export const CreateAccountFormContainer = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CreateAccountForm = styled.input`
  background: #f7f8fa;
  border-radius: 5px;
  border: none;
  height: 50px;
  width: 100%;
  outline: none;
  caret-color: #1652f0;
  padding-inline: 10px 100px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;

  color: #b3b4b8;
  -webkit-tap-highlight-color: transparent;
`;

export const CreateAccountButton = styled(Button)`
  height: 35px;
  border-radius: 20px;
  position: absolute;
  width: 90px;
  right: 10px;
`;
