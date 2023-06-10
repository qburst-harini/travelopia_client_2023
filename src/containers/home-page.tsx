import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
import "../css/utilities.css";
import { Header, Footer } from "../components";
import { place1, place2, place3 } from "../images/index";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="main-header">
        <Header />

        <div className="content">
          <h1>To Travel, is to Live</h1>
          <p>Enrich Lives Through Inspiring Travel Experiences</p>
          <button onClick={() => navigate("/travellers-form")} className="btn">
            Create My Trip Now
          </button>
        </div>
      </header>
      <main>
        <section id="facility" className="icons bg-light">
          <header className="section-header ">
            <h2 className="l-heading">What make us different</h2>
          </header>

          <div className="flex-items">
            <div className="f-item">
              <i className="fa-sharp fas fa-heart fa-2x"></i>
              <div>
                <h3>Safety & Security</h3>
                <p>
                  Your safety and wellbeing are our top priorities. We only
                  offer safety standards
                </p>
              </div>
            </div>
            <div className="f-item">
              <i className="fas fa-star fa-2x"></i>
              <div>
                <h3>Unique Experiences</h3>
                <p>
                  Tell us your travel dream and we will create best experiences
                  for you
                </p>
              </div>
            </div>
            <div className="f-item">
              <i className="fas fa-clock fa-2x"></i>
              <div>
                <h3>Fully Supported Travel</h3>
                <p>
                  Your dedicated and personal trip coordinator is available
                  around the clock for you
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
