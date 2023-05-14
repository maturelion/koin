import styled from "styled-components";
import { Button } from "../Components.styled";

export const LoginRecoveryPhraseContainer = styled.div``;
export const LoginRecoveryPhraseTextContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  /* justify-content: end; */
`;
export const LoginRecoveryPhraseTextHeader = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-block-end: 10px;

  color: #1f2533;
`;
export const LoginRecoveryPhraseText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #4f5c6c;
`;
export const LoginRecoveryPhraseTextArea = styled.textarea`
  background: #e9e9e9;
  border-radius: 5px;
  margin-top: 30px;
  outline: none;
  border: none;
  caret-color: #1652f0;
  padding: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;

  -webkit-tap-highlight-color: transparent;
`;
export const LoginRecoveryPhraseButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;
export const LoginRecoveryPhraseButton = styled(Button)``;
