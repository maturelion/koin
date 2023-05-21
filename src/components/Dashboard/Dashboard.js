import React, { useState } from "react";
import {
  DashboardContainer,
  DashboardQR,
  DashboardQRImg,
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
import qrCodePng from "../../assets/qrcode-scan.png";
import Coins from "../Coins/Coins";
import Nfts from "../Nfts/Nfts";
import Footer from "../../containers/Footer/Footer";

const Dashboard = () => {
  const [tabs, setTabs] = useState("Coins");
  return (
    <DashboardContainer>
      <DashboardQR>
        <DashboardQRImg src={qrCodePng}></DashboardQRImg>
      </DashboardQR>
      <DashboardTop>
        <DashboardUsername>@abigail</DashboardUsername>
        <DashboardBalance>US$0.00</DashboardBalance>
        <DashboardTxTab>
          <DashboardTxTabLink href="/send">Send</DashboardTxTabLink>
          <DashboardTxTabLink href="/receive">Receive</DashboardTxTabLink>
          <DashboardTxTabLink href="/trade">Trade</DashboardTxTabLink>
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
