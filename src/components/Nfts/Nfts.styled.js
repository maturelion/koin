import styled from "styled-components";

export const NftsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  padding: 10px;
  margin-block-start: 25px;
`;

export const NftsCard = styled.div`
  /* margin-inline: auto; */
`;

export const NftsImage = styled.img`
  border-radius: 5px;
  object-fit: contain;
  width: 100%;
`;

export const NftsName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: #0c243b;
`;

export const NftsDescription = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;

  color: #aaaaaa;
`;
