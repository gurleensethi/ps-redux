import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import NotFoundPage from "./components/not-found/NotFoundPage";
import store from "./data/store";
import { Provider as ReduxProvider } from "react-redux";
import CoursesContainer from "./components/courses/CoursesContainer";
import ManageCoursePage from "./components/courses/ManageCoursePage";
import { Container } from "@material-ui/core";

const App: FunctionComponent = (props) => {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Header />
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesContainer} />
            <Route path="/course/:courseId" component={ManageCoursePage} />
            <Route path="/course" component={ManageCoursePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </Router>
    </ReduxProvider>
  );
};

export default App;
