import styled from "styled-components";

export const WelcomeContainer = styled.div``;

export const CarouselContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WalletName = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  margin-block: 0 10px;
  color: #0052ff;

  &:last-child {
    margin-inline-start: 5px;
  }
`;

export const WalletNameBlack = styled(WalletName)`
  color: #000;
`;

export const WalletDiscription = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: rgba(0, 0, 0, 0.5);
`;

export const AuthButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;
