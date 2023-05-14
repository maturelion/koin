import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#1652F0" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "#1652F0")};
  width: 100%;
  height: 60px;
  margin-block: auto;
  border: transparent;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;

  -webkit-tap-highlight-color: transparent;
`;

export const BackArrow = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;

  -webkit-tap-highlight-color: transparent;
`;
