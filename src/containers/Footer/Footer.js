import React from 'react'
import { DashboardNav, DashboardNavIcon } from './Footer.styled'
import walletIcon from "../../assets/wallet icon.svg";
import BrowserIcon from "../../assets/browser icon.svg";
import settingsIcon from "../../assets/settings icon.svg";

const Footer = () => {
  return (
    <DashboardNav>
        <DashboardNavIcon src={walletIcon}></DashboardNavIcon>
        <DashboardNavIcon src={BrowserIcon}></DashboardNavIcon>
        <DashboardNavIcon src={settingsIcon}></DashboardNavIcon>
    </DashboardNav>
  )
}

export default Footer