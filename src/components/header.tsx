import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
import "../css/utilities.css";

export const Header = () => {
     const navigate = useNavigate();
  return (
    <>
      <div id="navbar" className="navbar top">
        <h1 className="logo">
          <span className="text-primary">
            <i className="fas fa-globe fa-solid"></i> T
          </span>
          ravelopia
        </h1>
        <nav>
          <ul>
            <li>
              <a onClick={() => navigate("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => navigate("/travellers-form")}>PlanMyTrip</a>
            </li>
            <li>
              <a onClick={() => navigate("/travellers-list")}>Travellers</a>
            </li>
            <li>
              <a onClick={() => navigate("/contact")}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
