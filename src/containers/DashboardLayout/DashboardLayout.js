import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardLayoutContainer } from "./DashboardLayout.styled";

const DashboardLayout = () => {
  return (
    <DashboardLayoutContainer>
      <Outlet />
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
