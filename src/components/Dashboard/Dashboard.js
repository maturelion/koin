import React, { useEffect, useState } from "react";
import {
  DashboardContainer,
  // DashboardQR,
  // DashboardQRImg,
  DashboardTop,
  DashboardUsername,
  DashboardBalance,
  DashboardTxTab,
  DashboardTxTabLink,
  DashboardMain,
  DashboardMainTab,
  DashboardMainList,
  DashboardMainCoins,
  DashboardMainNFTs,
} from "./Dashboard.styled";
// import qrCodePng from "../../assets/qrcode-scan.png";
import Coins from "../Coins/Coins";
import Nfts from "../Nfts/Nfts";
import Footer from "../../containers/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserWallet } from "../../feature/wallet/WalletActions";

const Dashboard = () => {
  const dispatch = useDispatch()
  const [tabs, setTabs] = useState("Coins");
  const {balance} = useSelector(state => state.wallet)
  const {user} = useSelector(state => state.user)

  const sum = balance && balance.map((wallet) => wallet.balance).reduce((accumulator, balance) => parseFloat(accumulator) + parseFloat(balance), 0);

  const overall_balance = new Intl.NumberFormat('en-US',
  { style: 'currency', currency: 'USD' }
).format(sum); 


  useEffect(() => {
  dispatch(getUserWallet({user}))
  }, [dispatch, user])
  
  return (
    <DashboardContainer>
      {/* <DashboardQR>
        <DashboardQRImg src={qrCodePng}></DashboardQRImg>
      </DashboardQR> */}
      <DashboardTop>
        <DashboardUsername>@{user.username}</DashboardUsername>
        <DashboardBalance>{overall_balance} USD</DashboardBalance>
        <DashboardTxTab>
          <DashboardTxTabLink to="/#send">Send</DashboardTxTabLink>
          <DashboardTxTabLink to="receive">Receive</DashboardTxTabLink>
          <DashboardTxTabLink to="/#trade">Trade</DashboardTxTabLink>
        </DashboardTxTab>
      </DashboardTop>
      <DashboardMain>
        <DashboardMainTab>
          <DashboardMainCoins
            className={tabs === "Coins" && "animate"}
            activeTab={tabs}
            onClick={() => {
              setTabs("Coins");
            }}
          >
            Coins
          </DashboardMainCoins>
          <DashboardMainNFTs
            className={tabs === "Nfts" && "animate"}
            activeTab={tabs}
            onClick={() => {
              setTabs("Nfts");
            }}
          >
            NFTs
          </DashboardMainNFTs>
        </DashboardMainTab>
        <DashboardMainList>
          {tabs === "Coins" ? <Coins /> : tabs === "Nfts" ? <Nfts /> : null}
        </DashboardMainList>
      </DashboardMain>
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard;
