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
  DashboardNav,
  DashboardNavIcon,
} from "./Dashboard.styled";
import qrCodePng from "../../assets/qrcode-scan.png";
import walletIcon from "../../assets/wallet icon.svg";
import BrowserIcon from "../../assets/browser icon.svg";
import settingsIcon from "../../assets/settings icon.svg";
import Coins from "../Coins/Coins";
import Nfts from "../Nfts/Nfts";

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
      <DashboardNav>
        <DashboardNavIcon src={walletIcon}></DashboardNavIcon>
        <DashboardNavIcon src={BrowserIcon}></DashboardNavIcon>
        <DashboardNavIcon src={settingsIcon}></DashboardNavIcon>
      </DashboardNav>
    </DashboardContainer>
  );
};

export default Dashboard;
