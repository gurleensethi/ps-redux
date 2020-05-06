import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

const HomePage: FunctionComponent = () => {
  return (
    <Container>
      <h1>Pluralsight Administration</h1>
      <p>React Redux and React Router</p>
      <Link to="/about">Learn More</Link>
    </Container>
  );
};

export default HomePage;
