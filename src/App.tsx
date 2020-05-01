import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import NotFoundPage from "./components/not-found/NotFoundPage";
import CoursesPage from "./components/courses/CoursesPage";
import store from "./data/store";
import { Provider } from "react-redux";

const App: FunctionComponent = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
