import React from "react";
import {
  CreateRecoveryPhraseContainer,
  CreateRecoveryPhraseHeaders,
  CreateRecoveryPhraseCardContainer,
  CreateRecoveryPhraseCard,
  CreateRecoveryPhraseButtonLayout,
  CreateRecoveryPhraseButton,
  CreateRecoveryPhraseText,
  CreateRecoveryPhraseOl,
  CreateRecoveryPhraseLi,
} from "./CreateRecoveryPhrase.styled";
import { Link } from "react-router-dom";

const CreateRecoveryPhrase = () => {
  return (
    <CreateRecoveryPhraseContainer>
      <CreateRecoveryPhraseHeaders>Recovery phrase</CreateRecoveryPhraseHeaders>
      <CreateRecoveryPhraseCardContainer>
        <CreateRecoveryPhraseCard>
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
        </CreateRecoveryPhraseCard>
        <CreateRecoveryPhraseText>
          These 12 words are the keys to your wallet. Back it up on the cloud or
          back it up manually. Do not share this with anyone.
        </CreateRecoveryPhraseText>
      </CreateRecoveryPhraseCardContainer>
      <CreateRecoveryPhraseButtonLayout>
        <CreateRecoveryPhraseButton
          primary={"primary"}
          onClick={() => {
            console.log("Back up seedphrase");
          }}
        >
          Back up on Google Drive
        </CreateRecoveryPhraseButton>
        <CreateRecoveryPhraseButton as={Link} to="/manual-backup">
          Back up manually
        </CreateRecoveryPhraseButton>
      </CreateRecoveryPhraseButtonLayout>
    </CreateRecoveryPhraseContainer>
  );
};

export default CreateRecoveryPhrase;
