import React from "react";
import { useNavigate } from "react-router-dom";
import {
  WELCOME_QOUTE,
  WELCOME_DESC,
  CREATE_MY_TRIP_NOW,
} from "../utility/labels";

export const WelcomeSection = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h1>{WELCOME_QOUTE}</h1>
      <p>{WELCOME_DESC}</p>
      <button onClick={() => navigate("/travellers-form")} className="btn">
        {CREATE_MY_TRIP_NOW}
      </button>
    </div>
  );
};
