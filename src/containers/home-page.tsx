import React from "react";
import "../css/style.css";
import "../css/utilities.css";
import { Header, Footer, WelcomeSection } from "../components";
import { facility } from "../utility/mock";
import { WELCOME_HEADING } from "../utility/labels";

export const HomePage = () => {
  const FacilitySection = () => {
    return (
      <main>
        <section id="facility" className="icons bg-light">
          <header className="section-header ">
            <h2 className="l-heading">{WELCOME_HEADING}</h2>
          </header>

          <div className="flex-items">
            {facility.map((item, idx) => {
              return (
                <div className="f-item" key={`${item.topic}-${idx}`}>
                  <i className={item.icon}></i>
                  <div>
                    <h3>{item.topic}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    );
  };
  return (
    <>
      <div className="main-header">
        <Header />
        <WelcomeSection />
      </div>
      <FacilitySection />
      <Footer />
    </>
  );
};
