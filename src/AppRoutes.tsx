import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  TravellersForm,
  TravellersList,
  HomePage,
  FAQs,
} from "./containers/index";

export const AppRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/travellers-form" element={<TravellersForm />}></Route>
        <Route path="/travellers-list" element={<TravellersList />}></Route>
        <Route path="/contact" element={<FAQs />}></Route>
      </Routes>
    </Router>
  );
};

export default Routes;
