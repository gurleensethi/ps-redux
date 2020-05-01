import React, { FunctionComponent } from "react";
import { RootState } from "src/types";
import { connect, ConnectedProps } from "react-redux";

interface OwnProps {}

const mapStateToProps = (state: RootState) => {
  return {
    courses: state.courses,
    authors: state.authors,
  };
};

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & OwnProps;

const ManageCoursePage: FunctionComponent<Props> = (props) => {
  React.useEffect(() => {});

  return <div>Manage Courses</div>;
};

export default connector(ManageCoursePage);
