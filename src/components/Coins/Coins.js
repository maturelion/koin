import React, { useEffect, useState } from "react";
import {
  CoinsBalanceText,
  StyleCoins,
  StyleCoin,
  StyleCoinIcon,
  StyleCoinDetails,
  StyleCoinName,
  StyleCoinFullName,
  StyleCoinAbrv,
  StyleCoinPrice,
  StyleCoinPriceUsd,
  StyleCoinPriceValue,
} from "./Coins.styled";
// import btcPng from "../../assets/btc-png.png";
import Moralis from "moralis";
import { ethers } from "ethers";

function Coins() {
  const [tokenBalances, setTokenBalances] = useState([]);
  const getBalance = async () => {
    try {
      const tkBalances = await Moralis.Web3API.account.getTokenBalances({
        address: "0x4DE23f3f0Fb3318287378AdbdE030cf61714b2f3",
        chain: "eth",
      });

      setTokenBalances(tkBalances);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBalance();
  });

  return (
    <>
      <CoinsBalanceText>BALANCE</CoinsBalanceText>
      <StyleCoins>
        {tokenBalances.map((e, i) => (
          <StyleCoin key={i}>
            <StyleCoinIcon src={e.logo}></StyleCoinIcon>
            <StyleCoinDetails>
              <StyleCoinName>
                <StyleCoinFullName>{e.name}</StyleCoinFullName>
                <StyleCoinAbrv>{e.symbol}</StyleCoinAbrv>
              </StyleCoinName>
              <StyleCoinPrice>
                <StyleCoinPriceUsd>$1,362.00</StyleCoinPriceUsd>
                <StyleCoinPriceValue>
                  {ethers.utils.FormatTypes(e.balance)}
                </StyleCoinPriceValue>
              </StyleCoinPrice>
            </StyleCoinDetails>
          </StyleCoin>
        ))}
      </StyleCoins>
    </>
  );
}

export default Coins;
