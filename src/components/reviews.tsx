import React from "react";
import { REVIEWS_HEADING } from "../utility/labels";
import { testimonials } from "../utility/mock";

export const Reviews = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <header className="section-header text-light py-3">
          <h2>{REVIEWS_HEADING}</h2>
        </header>
        {testimonials.map((item, idx) => {
          return (
            <div className="testimonial" key={`testimonials-${idx}`}>
              <img src={item.personImg} alt="Samantha" />
              <p>{item.message}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
