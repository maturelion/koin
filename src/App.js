import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppStyle } from "./App.styled";
import BaseRouter from "./routes";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <AppStyle>
      <Router>
        <ScrollToTop />
        <BaseRouter />
      </Router>
    </AppStyle>
  );
};

export default App;
