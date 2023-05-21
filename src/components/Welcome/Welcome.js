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
            <WalletName>CRYPTO</WalletName>
            <WalletNameBlack>LEDGER</WalletNameBlack>
          </div>
          <WalletDiscription>
            The easiest and most secure
            <br />
            crypto wallet
          </WalletDiscription>
        </Carousel>
      </CarouselContainer>
      <AuthButtonLayout>
        <Button primary={"primary"} as={Link} to="/register">
          Create new wallet
        </Button>
        <Button as={Link} to="/login">
          Login
        </Button>
      </AuthButtonLayout>
    </WelcomeContainer>
  );
};

export default Welcome;
