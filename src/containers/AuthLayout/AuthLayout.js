import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "../../components/Components.styled";
import { AuthLayoutContainer } from "./AuthLayout.styled";

const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <AuthLayoutContainer>
      {window.location.pathname === "/" ? null : (
        <BackArrow>
          <FontAwesomeIcon
            style={{cursor: "pointer"}}
            icon={faArrowLeftLong}
            onClick={() => navigate(-1)}
          />
        </BackArrow>
      )}
      <Outlet />
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
