import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { FormWrapper, SendCardForm } from "../Send/Send.styled";
import { FormError } from "../Login/Login.styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BackArrow } from "../Components.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { TransferContainer } from "./Transfer.styled";
import { getUser } from "../../feature/user/UserActions";
import { useDispatch, useSelector } from "react-redux";

const Transfer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser({}));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      account_number: "",
      amount: "",
    },

    onSubmit: (values) => {
      // dispatch(loginUser(values)).unwrap().then(res => navigate("/dashboard"))
      setLoading(true);
      setTimeout(() => {
        // Assume an error occurred during the API request
        alert(user && user.user_transfer_message);
        setLoading(false);
      }, 2000);
    },

    validationSchema: Yup.object({
      account_number: Yup.string().required("Account number is required"),
      routing_number: Yup.string().required("Routing number is required"),
      amount: Yup.string().required("Amount is required"),
    }),
  });

  return (
    <div>
      <h2
        style={{
          position: "absolute",
          width: "100vw",
          textAlign: "center",
          zIndex: "-1",
        }}
      >
        Transfer
      </h2>
      <BackArrow style={{ marginInlineStart: "10px" }}>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faArrowLeftLong}
          onClick={() => navigate(-1)}
        />
      </BackArrow>
      <TransferContainer>
        <SendCardForm onSubmit={formik.handleSubmit}>
          <FormWrapper>
            <input
              type="text"
              name="account_number"
              placeholder="Account number"
              onChange={formik.handleChange}
              value={formik.values.account_number}
            />
          </FormWrapper>
          {formik.errors.account_number ? (
            <FormError>{formik.errors.account_number}</FormError>
          ) : null}
          <FormWrapper>
            <input
              type="text"
              name="routing_number"
              placeholder="Routing number"
              onChange={formik.handleChange}
              value={formik.values.routing_number}
            />
          </FormWrapper>
          {formik.errors.routing_number ? (
            <FormError>{formik.errors.routing_number}</FormError>
          ) : null}
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
          {formik.errors.amount ? (
            <FormError>{formik.errors.amount}</FormError>
          ) : null}
          <button
            type="submit"
            disabled={loading}
            style={{ cursor: "pointer" }}
          >
            {loading ? (
              <ReactLoading
                type={"spinningBubbles"}
                height={"20px"}
                width={"20px"}
              />
            ) : (
              `Transfer`
            )}
          </button>
        </SendCardForm>
      </TransferContainer>
    </div>
  );
};

export default Transfer;
