import React from "react";
import {
  NftsContainer,
  NftsCard,
  NftsImage,
  NftsName,
  NftsDescription,
} from "./Nfts.styled";
import nftImage from "../../assets/nft-image.jpeg";

export default function Nfts() {
  return (
    <NftsContainer>
      {[...Array(0)].map((e, i) => (
        <NftsCard>
          <NftsImage src={nftImage}></NftsImage>
          <NftsName>Moralis Maharaja</NftsName>
          <NftsDescription>@BoredMoralisMages</NftsDescription>
        </NftsCard>
      ))}
    </NftsContainer>
  );
}
