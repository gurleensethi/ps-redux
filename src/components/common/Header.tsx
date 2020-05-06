import React, { FunctionComponent } from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";

const Header: FunctionComponent<RouteComponentProps> = (props) => {
  return (
    <AppBar position="static">
      <Tabs
        variant="fullWidth"
        value={props.location.pathname}
        aria-label="simple tabs example"
        onChange={(event, value) => props.history.push(value)}
      >
        <Tab label="Home" value="/" />
        <Tab label="About" value="/about" />
        <Tab label="Courses" value="/courses" />
      </Tabs>
    </AppBar>
  );
};

export default withRouter(Header);
