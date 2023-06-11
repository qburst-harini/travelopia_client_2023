import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Header, Footer } from "../components";
import { TRAVELLERS_LIST, CREATE_MY_TRIP_NOW } from "../utility/labels";
import { ITravellers } from "./types";
import "../css/style.css";
import "../css/utilities.css";

export const TravellersList = () => {
  let navigate = useNavigate();
  const [list, setList] = useState<ITravellers[]>([]);
  const tableHeaders = {
    Name: "name",
    Email: "email",
    City: "city",
    Number_of_Travellers: "travelNumbers",
    Price: "dollars",
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/travellers`)
      .then((res) => setList(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <header className="form-header">
        <Header />
      </header>
      <main>
        <section id="travellers-list">
          <div className="list-container ">
            <header className="section-header ">
              <h2>{TRAVELLERS_LIST}</h2>
            </header>
            <div className="form-display">
              {list?.length ? (
                <table className="travellers-list">
                  <thead>
                    <tr>
                      {Object.keys(tableHeaders).map((item, idx) => {
                        return (
                          <th key={`item-${idx}`} id={`item-${idx}`}>
                            {item}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((val: ITravellers, idx: number) => {
                      return (
                        <tr key={`row-${idx}`}>
                          {Object.values(tableHeaders).map(
                            (h: string, idx: number) => {
                              const value =
                                h === "dollars" ? `$${val[h]}` : `${val[h]}`;
                              return <td key={`${idx}`}>{value}</td>;
                            }
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <h3>Loading...</h3>
              )}
              <button
                onClick={() => navigate("/travellers-form")}
                className="btn"
              >
                {CREATE_MY_TRIP_NOW}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
