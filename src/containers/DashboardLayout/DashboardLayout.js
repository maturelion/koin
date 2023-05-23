import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DashboardLayoutContainer } from "./DashboardLayout.styled";
import { useDispatch } from "react-redux";
import { getUser } from "../../feature/user/UserActions";

const DashboardLayout = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser({}))
  }, [dispatch])

  useEffect(() => {
    if(localStorage.getItem('token') === null) {
      navigate("/login")
    }
  }, [navigate])

  return (
    <DashboardLayoutContainer>
      <Outlet />
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
