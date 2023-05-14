import styled from "styled-components";
import { BackArrow, Button } from "../Components.styled";

export const CreateRecoveryPhraseContainer = styled.div``;

export const CreateRecoveryPhraseHeaders = styled(BackArrow)`
  position: absolute;
  top: 0;
  left: 50px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #1f2533;
`;

export const CreateRecoveryPhraseCardContainer = styled.div`
  height: 70vh;
`;

export const CreateRecoveryPhraseCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;

  background: #ffffff;
  box-shadow: 0px 2px 6px #c2c2c2;
  border-radius: 5px;
`;

export const CreateRecoveryPhraseManualCard = styled.div`
  height: 200px;

  background: #ffffff;
  box-shadow: 0px 2px 6px #c2c2c2;
  border-radius: 5px;
`;

export const CreateRecoveryPhraseOl = styled.ol`
  list-style: none;
`;

export const CreateRecoveryPhraseLi = styled.li`
  float: left;
  width: calc(100% / 3);

  margin-block: 10px;

  & > span {
    color: #c2c2c2;
  }
`;

export const CreateRecoveryPhraseCopy = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  text-align: center;

  color: #1652f0;
`;

export const CreateRecoveryPhraseButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

export const CreateRecoveryPhraseButton = styled(Button)``;

export const CreateRecoveryPhraseText = styled.div`
  margin-block-start: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: #4f5c6c;
`;
