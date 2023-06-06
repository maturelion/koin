import styled from "styled-components";

export const SendContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* height: calc(100vh - 120px); */
  overflow: hidden;
`;

export const SendCardForm = styled.form`
  padding: 50px 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  & > button {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1652f0;
    color: #ffffff;
    border: none;
    height: 40px;
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 40px;
    margin-block: 10px;

    & > input {
        width: 100%;
        outline: transparent;
        border: 1px solid #1652f0;
        height: 40px;
        padding-inline: 10px;
    }
`

export const SendTabContainer = styled.div`
  display: flex;
  padding: 15px 25px;
  background: #0a49ee;
  border-radius: 15px;
`;

export const SendTab = styled.div`
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
