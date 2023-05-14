import React from "react";
import {
  CreateRecoveryPhraseContainer,
  CreateRecoveryPhraseHeaders,
  CreateRecoveryPhraseCardContainer,
  CreateRecoveryPhraseManualCard,
  CreateRecoveryPhraseButtonLayout,
  CreateRecoveryPhraseButton,
  CreateRecoveryPhraseText,
  CreateRecoveryPhraseOl,
  CreateRecoveryPhraseLi,
  CreateRecoveryPhraseCopy,
} from "./CreateRecoveryPhrase.styled";
import { Link } from "react-router-dom";

const CreateRecoveryPhraseManualBackup = () => {
  return (
    <CreateRecoveryPhraseContainer>
      <CreateRecoveryPhraseHeaders>Manual Backup</CreateRecoveryPhraseHeaders>
      <CreateRecoveryPhraseCardContainer>
        <CreateRecoveryPhraseManualCard>
          <CreateRecoveryPhraseOl>
            <CreateRecoveryPhraseLi>
              <span>1</span> olive
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>2</span> olive
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>3</span> olive
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>4</span> coco
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>5</span> coco
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>6</span> coco
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>7</span> sun
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>8</span> sun
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>9</span> sun
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>10</span> lily
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>11</span> lily
            </CreateRecoveryPhraseLi>
            <CreateRecoveryPhraseLi>
              <span>12</span> lily
            </CreateRecoveryPhraseLi>
          </CreateRecoveryPhraseOl>
          <CreateRecoveryPhraseCopy>Copy to clipboard</CreateRecoveryPhraseCopy>
        </CreateRecoveryPhraseManualCard>
        <CreateRecoveryPhraseText>
          Write these 12 words down, or copy them to a password manager.
        </CreateRecoveryPhraseText>
      </CreateRecoveryPhraseCardContainer>
      <CreateRecoveryPhraseButtonLayout>
        <CreateRecoveryPhraseButton
          primary={"primary"}
          as={Link}
          to="/dashboard"
        >
          Next
        </CreateRecoveryPhraseButton>
      </CreateRecoveryPhraseButtonLayout>
    </CreateRecoveryPhraseContainer>
  );
};

export default CreateRecoveryPhraseManualBackup;
