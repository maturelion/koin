import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getHistories } from "../../feature/history/HistoryAction";
import { useDispatch, useSelector } from "react-redux";

const History = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { histories } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(
      getHistories({
        user: location.state.userId,
        currency: location.state.balanceId,
      })
    );
  }, [dispatch, location.state.balanceId, location.state.userId]);
  return (
    <div>
        <div style={{display: "flex", justifyContent: "center", marginBlock: "20px"}}>History</div>
      <div>
        {histories.map((history, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              border: "1px solid #EBEBEB",
              borderRadius: "10px",
              padding: "20px",
              margin: "10px 20px"
            }}
          >
            <img
              src={history.currency_set.icon}
              alt={history.currency_set.name}
              height={40}
              width={40}
            />
            <div>
              <div style={{marginBlockEnd: "5px"}}>
                ${history.amount} was sent{" "}
                {history.tx_type === "send" ? "out of" : "into"} your wallet
              </div>
              <div style={{fontWeight: "lighter", fontSize: "10px"}}>{new Date(`${history.created_at}`).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
