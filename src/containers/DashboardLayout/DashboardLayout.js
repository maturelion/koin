import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Outlet, useNavigate } from "react-router-dom";
import { DashboardLayoutContainer } from "./DashboardLayout.styled";
import { useDispatch } from "react-redux";
import { getUser } from "../../feature/user/UserActions";
import { logoutUser } from "../../feature/auth/AuthActions";

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logoutUser({}));
        window.location.pathname = '/login'
      }
    }
  }, [dispatch, navigate]);

  return (
    <DashboardLayoutContainer>
      <Outlet />
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
