import React from "react";
import { Button } from "../Components.styled";
import {
  LegalContainer,
  LegalTextContainer,
  LegalLinkContainer,
  LegalTextHeader,
  LegalText,
  LegalLinkList,
  LegalLinkListContainer,
} from "./Legal.styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Legal = () => {
  return (
    <LegalContainer>
      <LegalTextContainer>
        <LegalTextHeader>Legal</LegalTextHeader>
        <LegalText>
          Please review the Coinbase Wallet Terms of Service and Privacy Policy
        </LegalText>
      </LegalTextContainer>
      <LegalLinkContainer>
        <LegalLinkListContainer>
          <LegalLinkList
            onClick={() => {
              console.log("Show ToS");
            }}
          >
            Terms of Services
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "#c2c2c2" }}
            />
          </LegalLinkList>
          <LegalLinkList
            onClick={() => {
              console.log("Show Privacy Policy");
            }}
          >
            Privacy Policy
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "#c2c2c2" }}
            />
          </LegalLinkList>
        </LegalLinkListContainer>
        <Button primary={"primary"} as={Link} to="/create-account">
          Accept
        </Button>
      </LegalLinkContainer>
    </LegalContainer>
  );
};

export default Legal;
