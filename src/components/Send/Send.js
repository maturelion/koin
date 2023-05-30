import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import ReactLoading from "react-loading";
import { BackArrow } from "../Components.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FormWrapper, SendCardForm, SendContainer } from "./Send.styled";
import { FormError } from "../Login/Login.styled";

const Send = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    wallet_address: "",
    amount: "",
  };

  const onSubmit = (values) => {
    // dispatch(loginUser(values)).unwrap().then(res => navigate("/dashboard"))
    setLoading(true);
    // setTimeout(() => {
    //   // Assume an error occurred during the API request
    //   alert("An error occur, please contact admin.");
    //   setLoading(false);
    // }, 2000); // Delay of 2 seconds
  };

  const validationSchema = Yup.object({
    wallet_address: Yup.string().required("Address is required"),
    amount: Yup.string().required("Amount is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <h2
        style={{
          position: "absolute",
          width: "100vw",
          textAlign: "center",
          zIndex: "-1",
        }}
      >
        Send
      </h2>
      <BackArrow style={{ marginInlineStart: "10px" }}>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faArrowLeftLong}
          onClick={() => navigate(-1)}
        />
      </BackArrow>
      <SendContainer>
        <SendCardForm onSubmit={formik.handleSubmit}>
          <FormWrapper>
            <input
              type="text"
              name="wallet_address"
              placeholder="address"
              onChange={formik.handleChange}
              value={formik.values.wallet_address}
            />
          </FormWrapper>
          <FormWrapper>
            <input
              type="number"
              pattern="\d*"
              name="amount"
              placeholder="amount"
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
          </FormWrapper>
          <button type="submit" disabled={loading}>
            {loading ? (
              <ReactLoading
                type={"spinningBubbles"}
                height={"20px"}
                width={"20px"}
              />
            ) : (
              "Send"
            )}
          </button>
          {formik.errors.wallet_address ? (
            <FormError>{formik.errors.wallet_address}</FormError>
          ) : null}
          {formik.errors.amount ? (
            <FormError>{formik.errors.amount}</FormError>
          ) : null}
        </SendCardForm>
      </SendContainer>
    </>
  );
};

export default Send;
