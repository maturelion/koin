import React from "react";
import {
  DashboardNav,
  DashboardNavIcon,
  DashboardNavIconLink,
} from "./Footer.styled";
import walletIcon from "../../assets/wallet icon.svg";
import BrowserIcon from "../../assets/browser icon.svg";
import settingsIcon from "../../assets/settings icon.svg";

const Footer = () => {
  return (
    <DashboardNav>
      <DashboardNavIconLink to="/">
        <DashboardNavIcon src={walletIcon}></DashboardNavIcon>
      </DashboardNavIconLink>
      <DashboardNavIconLink to="explorer">
        <DashboardNavIcon src={BrowserIcon}></DashboardNavIcon>
      </DashboardNavIconLink>
      <DashboardNavIconLink to="settings">
        <DashboardNavIcon src={settingsIcon}></DashboardNavIcon>
      </DashboardNavIconLink>
    </DashboardNav>
  );
};

export default Footer;
