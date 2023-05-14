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
  justify-content: end;
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

export const LoginButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

export const LoginButton = styled(Button)``;
