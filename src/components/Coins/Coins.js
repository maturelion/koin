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
  StyleCoinPriceValue,
} from "./Coins.styled";
// import btcPng from "../../assets/btc-png.png";
// import Moralis from "moralis";
// import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { getUserWallet } from "../../feature/wallet/WalletActions";
import { useNavigate } from "react-router-dom";

function Coins() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { balance } = useSelector((state) => state.wallet);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserWallet({ user }));
  }, [dispatch, user]);

  return (
    <>
      <CoinsBalanceText>BALANCE</CoinsBalanceText>
      {/* No Cryptocurrency in Wallet */}
      <StyleCoins>
        {balance &&
          balance.map((e, i) => (
            <StyleCoin
              key={i}
              onClick={() =>
                navigate("/dashboard/history", {
                  state: { balanceId: e.currency_set.id, userId: user.id },
                })
              }
            >
              <StyleCoinIcon src={e.currency_set.icon}></StyleCoinIcon>
              <StyleCoinDetails>
                <StyleCoinName>
                  <StyleCoinFullName>{e.currency_set.name}</StyleCoinFullName>
                  <StyleCoinAbrv>{e.currency_set.symbol}</StyleCoinAbrv>
                </StyleCoinName>
                <StyleCoinPrice>
                  <StyleCoinPriceUsd>${e.balance}</StyleCoinPriceUsd>
                  {e.currency_set.symbol === "BTC" &&
                    e.balance > 0 &&
                    e.show_pending === true && (
                      <StyleCoinPriceValue>1/3 pending</StyleCoinPriceValue>
                    )}
                  {e.currency_set.symbol === "ETH" &&
                    e.balance > 0 &&
                    e.show_pending === true && (
                      <StyleCoinPriceValue>2/6 pending</StyleCoinPriceValue>
                    )}
                  {e.currency_set.symbol === "USDT" &&
                    e.balance > 0 &&
                    e.show_pending === true && (
                      <StyleCoinPriceValue>2/6 pending</StyleCoinPriceValue>
                    )}
                </StyleCoinPrice>
              </StyleCoinDetails>
            </StyleCoin>
          ))}
      </StyleCoins>
    </>
  );
}

export default Coins;
