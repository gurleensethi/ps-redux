import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";

const App: FunctionComponent = (props) => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Router>
  );
};

export default App;
