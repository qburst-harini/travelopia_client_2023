import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { TravellersForm, TravellersList, HomePage } from "./containers/index";

export const AppRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/travellers-form" element={<TravellersForm />}></Route>
        <Route path="/travellers-list" element={<TravellersList />}></Route>
      </Routes>
    </Router>
  );
};

export default Routes;
