import styled from "styled-components";

export const LegalContainer = styled.div``;

export const LegalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
`;

export const LegalTextHeader = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-block-end: 5px;

  color: #1f2533;
`;
export const LegalText = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #4f5c6c;
`;

export const LegalLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
`;

export const LegalLinkListContainer = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
`;

export const LegalLinkList = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 18px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #1f2533;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;

  &:first-child {
    border-bottom: 1px solid #c2c2c2;
  }
`;
