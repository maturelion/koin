import React, { useState } from "react";
import {
  AddressCard,
  ReceiveContainer,
  ReceiveTab,
  ReceiveTabContainer,
} from "./Receive.styled";
import { BackArrow } from "../Components.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Receive = () => {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState("BTC");
  let depositAddress = "";
  let network = "";
  switch (tabs) {
    case "BTC":
      depositAddress = "bc1qksjgrtwzlmg27x5kchx2pr5jjfsd0s67jzmqed";
      network = "Bitcoin"
      break;
    case "ETH":
      depositAddress = "0x87018A4768969a74ca81196D0eC2b1b6D2E480ee";
      network = "ERC20"
      break;
    case "USDT":
      depositAddress = "TQHAP7R8UY2eoiqqQdPSV6xLwcGH62xHt1";
      network = "TRC20"
      break;

    default:
      break;
  }

  return (
    <>
      <h2
        style={{
          position: "absolute",
          width: "100vw",
          textAlign: "center",
          zIndex: "-1",
        }}
      >
        Receive
      </h2>
      <BackArrow style={{ marginInlineStart: "10px" }}>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faArrowLeftLong}
          onClick={() => navigate(-1)}
        />
      </BackArrow>
      <ReceiveContainer>
        <AddressCard>
          <ReceiveTabContainer>
            <ReceiveTab style={{textDecoration: `${tabs === "BTC" ? "underline" : ""}`}} onClick={() => setTabs("BTC")}>BTC</ReceiveTab>
            <ReceiveTab style={{textDecoration: `${tabs === "ETH" ? "underline" : ""}`}} onClick={() => setTabs("ETH")}>ETH</ReceiveTab>
            <ReceiveTab style={{textDecoration: `${tabs === "USDT" ? "underline" : ""}`}} onClick={() => setTabs("USDT")}>USDT</ReceiveTab>
          </ReceiveTabContainer>
          <>
            <img
              style={{
                height: "250px",
                width: "250px",
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
              src={`https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${depositAddress}&choe=UTF-8`}
              alt="qr"
            />
            <div>Network: {tabs}({network})</div>
            {depositAddress}
            <div
              style={{ marginBlockStart: "80px", color: "#1652F0" }}
              onClick={() => {
                navigator.clipboard
                  .writeText(depositAddress)
                  .then(() => {
                    alert("Deposit address copied to clipboard");
                  })
                  .catch(console.error);
              }}
            >
              Copy or share address
            </div>
          </>
        </AddressCard>
      </ReceiveContainer>
    </>
  );
};

export default Receive;
