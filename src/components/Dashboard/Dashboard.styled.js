import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardContainer = styled.div`
  max-width: 425px;
  max-height: 100vh;

  @media only screen and (min-width: 769px) {
    min-width: 769px;
  }
`;

export const DashboardQR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a49ee;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-left: auto;
  margin-block-end: -40px;

  @media only screen and (min-width: 769px) {
    max-width: 769px;
    /* right: 350px; */
  }
`;

export const DashboardQRImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const DashboardTop = styled.div`
  height: 290px;
  background: #1652f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DashboardUsername = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: #b5cbff;
`;

export const DashboardBalance = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  margin-block: 10px 20px;

  text-align: center;

  color: #ffffff;
`;

export const DashboardTxTab = styled.div`
  display: flex;
  padding: 15px 25px;
  background: #0a49ee;
  border-radius: 15px;
`;

export const DashboardTxTabLink = styled(Link)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 0 20px;
  text-decoration: none;
  border-right: 1px solid #ffffff;

  color: #ffffff;

  &:last-child {
    border-right: none;
  }

  -webkit-tap-highlight-color: transparent;
`;

export const DashboardMain = styled.div`
  height: calc(100vh - (232px));
  margin-top: -58px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  margin-inline: 10px;
  padding-inline: 10px;
`;

export const DashboardMainTab = styled.div`
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const DashboardMainCoins = styled.div`
  padding-block: 17px;
  border-bottom: 0px solid #1652f0;
  color: ${(props) => (props.activeTab === "Coins" ? "#1652f0" : "#757575")};
  text-align: center;
  width: 45%;
  cursor: pointer;
  transition: 0.1s ease;
  &.animate {
    border-bottom: 3px solid #1652f0;
  }
`;

export const DashboardMainNFTs = styled.div`
  padding-block: 17px;
  border-bottom: 0px solid #1652f0;
  color: ${(props) => (props.activeTab === "Nfts" ? "#1652f0" : "#757575")};
  text-align: center;
  width: 45%;
  cursor: pointer;
  transition: 0.1s ease;
  &.animate {
    border-bottom: 3px solid #1652f0;
  }
`;

export const DashboardMainList = styled.div`
  overflow-y: scroll;
  height: calc(100vh - (347px));
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;
