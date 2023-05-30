import React, { useEffect } from "react";
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
  // StyleCoinPriceValue,
} from "./Coins.styled";
// import btcPng from "../../assets/btc-png.png";
// import Moralis from "moralis";
// import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { getUserWallet } from "../../feature/wallet/WalletActions";

function Coins() {
  const dispatch = useDispatch()

  const {balance} = useSelector(state => state.wallet)
  const {user} = useSelector(state => state.user)

  
  useEffect(() => {
    dispatch(getUserWallet({user}))
  }, [dispatch, user]);

  return (
    <>
      <CoinsBalanceText>BALANCE</CoinsBalanceText>
      <StyleCoins>
        {balance && balance.map((e, i) => (
          <StyleCoin key={i}>
            <StyleCoinIcon src={e.currency_set.icon}></StyleCoinIcon>
            <StyleCoinDetails>
              <StyleCoinName>
                <StyleCoinFullName>{e.currency_set.name}</StyleCoinFullName>
                <StyleCoinAbrv>{e.currency_set.symbol}</StyleCoinAbrv>
              </StyleCoinName>
              <StyleCoinPrice>
                <StyleCoinPriceUsd>${e.balance}</StyleCoinPriceUsd>
                {/* {e.currency_set.symbol === "BTC" && e.balance > 0 && <StyleCoinPriceValue>
                  1/3 pending
                </StyleCoinPriceValue>}
                {e.currency_set.symbol === "ETH" && e.balance > 0 && <StyleCoinPriceValue>
                  2/6 pending
                </StyleCoinPriceValue>}
                {e.currency_set.symbol === "USDT" && e.balance > 0 && <StyleCoinPriceValue>
                  2/6 pending
                </StyleCoinPriceValue>} */}
              </StyleCoinPrice>
            </StyleCoinDetails>
          </StyleCoin>
        ))}
      </StyleCoins>
    </>
  );
}

export default Coins;
