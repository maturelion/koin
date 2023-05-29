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
    margin-top: 50px;
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

    & > input {
        width: 100%;
        outline: transparent;
        border: 1px solid #1652f0;
        height: 40px;
        padding-inline: 10px;
    }
`
