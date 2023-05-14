import React from "react";
import { Button } from "../Components.styled";
import {
  AuthButtonLayout,
  CarouselContainer,
  Carousel,
  WelcomeContainer,
  WalletName,
  WalletNameBlack,
  WalletDiscription,
} from "./Welcome.styled";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <CarouselContainer>
        <Carousel>
          <div style={{ display: "flex" }}>
            <WalletName>COIN</WalletName>
            <WalletNameBlack>FACE</WalletNameBlack>
          </div>
          <WalletDiscription>
            The easiest and most secure
            <br />
            crypto wallet
          </WalletDiscription>
        </Carousel>
      </CarouselContainer>
      <AuthButtonLayout>
        <Button primary={"primary"} as={Link} to="/legal">
          Create new wallet
        </Button>
        <Button as={Link} to="/login">
          Import existing wallet
        </Button>
      </AuthButtonLayout>
    </WelcomeContainer>
  );
};

export default Welcome;
