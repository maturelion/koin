import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.div`
  width: fill-available;
`;

export const ProfileCard = styled.div`
  margin-inline: 15px;
  margin-block-start: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ProfileLinkContainer = styled.ul`
  margin: 0;
  margin-top: 30px;
  padding: 0;
  padding-inline: 15px;
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`;
export const ProfileList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-block: 10px;
  cursor: pointer;
`;
