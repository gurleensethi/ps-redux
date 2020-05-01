import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import NotFoundPage from "./components/not-found/NotFoundPage";
import store from "./data/store";
import { Provider as ReduxProvider } from "react-redux";
import CoursesContainer from "./components/courses/CoursesContainer";

const App: FunctionComponent = (props) => {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursesContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </ReduxProvider>
  );
};

export default App;
