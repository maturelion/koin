import styled from "styled-components";

export const DashboardNav = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  width: 100vw;
  /* min-width: 425px; */
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 769px) {
    max-width: 769px;
  }
`;

export const DashboardNavIcon = styled.img``;