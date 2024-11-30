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
import QRCode from "react-qr-code";

const Receive = () => {
    const navigate = useNavigate();
    const [tabs, setTabs] = useState("BTC");
    let depositAddress = "";
    let network = "";
    switch (tabs) {
        case "BTC":
            depositAddress = "bc1qdwp8t00zy6jawj3e9t0d60e09a2w0xalgfmclt";
            network = "Bitcoin";
            break;
        case "ETH":
            depositAddress = "0x44A0bDbeC7b3BcFc0b2efc9Bd3400D76568FC8Ba";
            network = "ERC20";
            break;
        case "USDT":
            depositAddress = "TMMCfW1SfVmWedyTJinWM97dPnHcpH9FK9";
            network = "TRC20";
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
                        <ReceiveTab
                            style={{
                                textDecoration: `${
                                    tabs === "BTC" ? "underline" : ""
                                }`,
                            }}
                            onClick={() => setTabs("BTC")}
                        >
                            BTC
                        </ReceiveTab>
                        <ReceiveTab
                            style={{
                                textDecoration: `${
                                    tabs === "ETH" ? "underline" : ""
                                }`,
                            }}
                            onClick={() => setTabs("ETH")}
                        >
                            ETH
                        </ReceiveTab>
                        <ReceiveTab
                            style={{
                                textDecoration: `${
                                    tabs === "USDT" ? "underline" : ""
                                }`,
                            }}
                            onClick={() => setTabs("USDT")}
                        >
                            USDT
                        </ReceiveTab>
                    </ReceiveTabContainer>
                    <>
                        <div
                            style={{
                                height: "250px",
                                width: "250px",
                                backgroundColor: "#fff",
                                borderRadius: "10px",
                                padding: "10px"
                            }}
                        >
                            <QRCode
                                style={{
                                    height: "auto",
                                    maxWidth: "100%",
                                    width: "100%",
                                }}
                                value={`${depositAddress}`}
                            />
                        </div>
                        <div>
                            Network: {tabs}({network})
                        </div>
                        {depositAddress}
                        <div
                            style={{
                                marginBlockStart: "80px",
                                color: "#1652F0",
                            }}
                            onClick={() => {
                                navigator.clipboard
                                    .writeText(depositAddress)
                                    .then(() => {
                                        alert(
                                            "Deposit address copied to clipboard"
                                        );
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
