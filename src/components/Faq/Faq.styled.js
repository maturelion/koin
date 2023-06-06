import styled from "styled-components";

export const FAQContainer = styled.div`
  max-width: 600px;
  padding-top: 30px;
  margin-inline: 10px;
`;

export const FAQTitle = styled.h1`
  color: #1652f0;
  text-align: center;
  margin-bottom: 30px;
`;

export const FAQItem = styled.div`
  background-color: #1652f0;
  color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  -webkit-tap-highlight-color: transparent;
  `;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  cursor: pointer;
`;

export const Answer = styled.div`
  margin-top: 10px;
`;
