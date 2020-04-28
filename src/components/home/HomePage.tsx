import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const HomePage: FunctionComponent = () => {
  return (
    <div>
      <h1>Pluralsight Administration</h1>
      <p>React Redux and React Router</p>
      <Link to="/about">Learn More</Link>
    </div>
  );
};

export default HomePage;
