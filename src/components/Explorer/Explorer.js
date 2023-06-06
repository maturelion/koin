import React from "react";
import styled from "styled-components";

const Explorer = () => {
  return (
    <Container>
      <Title>Crypto Explorer</Title>
      <Iframe
        src="https://blockchair.com/&output=embed"
        title="Crypto Explorer"
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #0a49ee;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: none;
`;

export default Explorer;
