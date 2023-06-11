import React from "react";
import Collapsible from "react-collapsible";
import { Header, Footer } from "../components";
import { freqQuestions } from "../utility/mock";
import { CONTACT_HEADING } from "../utility/labels";

import "../css/style.css";
import "../css/utilities.css";

export const FAQs = () => {
  const CollapsableList = () => {
    return (
      <>
        {freqQuestions.map((item) => {
          return (
            <div className="border-primary">
              <Collapsible
                trigger={<h3 className="question-text">{item.topic}</h3>}
              >
                <p>{item.desc}</p>
              </Collapsible>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="form-header">
        <Header />
      </div>
      <main>
        <section>
          <div className="list-container">
            <header className="section-header ">
              <h2>{CONTACT_HEADING}</h2>
            </header>
            <CollapsableList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
