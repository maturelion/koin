import styled from "styled-components";

export const CoinsContainer = styled.div``;

export const CoinsBalanceText = styled.div`
  position: absolute;
  display: flex;
  width: -webkit-fill-available;
  margin-inline: 15px 30px;
  align-items: center;
  height: 50px;
  background-color: #ffffff;

  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;

  color: #aaaaaa;
`;

export const StyleCoins = styled.div`
  padding-block-start: 50px;
`;

export const StyleCoin = styled.div`
  margin-block: 20px;
  display: flex;
  align-items: center;
  margin-inline: 15px;
`;

export const StyleCoinIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-inline-end: 15px;
`;

export const StyleCoinDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyleCoinName = styled.div``;

export const StyleCoinFullName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #0c243b;
`;

export const StyleCoinAbrv = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;

  color: #aaaaaa;
`;

export const StyleCoinPrice = styled.div``;

export const StyleCoinPriceUsd = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: right;

  color: #0c243b;
`;

export const StyleCoinPriceValue = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  text-align: right;

  color: #aaaaaa;
`;
