import styled from "styled-components";

export const ReceiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* height: calc(100vh - 120px); */
  overflow: hidden;
`;

export const AddressCard = styled.div`
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const ReceiveTabContainer = styled.div`
  display: flex;
  padding: 15px 25px;
  background: #0a49ee;
  border-radius: 15px;
`;

export const ReceiveTab = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 0 20px;
  text-decoration: none;
  border-right: 1px solid #ffffff;
  cursor: pointer;

  color: #ffffff;

  &:last-child {
    border-right: none;
  }

  -webkit-tap-highlight-color: transparent;
`;
