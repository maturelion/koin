import React from "react";
import { AddressCard, ReceiveContainer } from "./Receive.styled";
import { BackArrow } from "../Components.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Receive = () => {
  const navigate = useNavigate();
  const depositAddress = "bc1q2xsfsrf8j0wmlhee0jg8nn3w5x47c39hhmw8tk";
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
      <BackArrow style={{marginInlineStart: "10px"}}>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faArrowLeftLong}
          onClick={() => navigate(-1)}
        />
      </BackArrow>
      <ReceiveContainer>
        <AddressCard>
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
        </AddressCard>
      </ReceiveContainer>
    </>
  );
};

export default Receive;
