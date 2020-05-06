import React, { FunctionComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "src/types";
import {
  createCourse,
  loadCourses,
  deleteCourse,
} from "src/data/courses/courses-actions";
import { bindActionCreators, Dispatch } from "redux";
import CourseList from "./CourseList";
import { loadAuthors } from "src/data/author/author-actions";
import { RouteComponentProps } from "react-router-dom";
import { loadingSelector } from "src/data/loading/loadig-selector";
import { CourseActions } from "src/data/courses/courses-types";
import { Box, Button, Divider, CircularProgress } from "@material-ui/core";

interface OwnProps {}

const mapStateToProps = (state: RootState) => ({
  courses: state.courses.courses.map((course) => {
    return {
      ...course,
      author: state.authors.find((author) => author.id === course.authorId),
    };
  }),
  isLoadingCourses: loadingSelector(state, [CourseActions.LoadCoursesRequest]),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      { createCourse, loadCourses, loadAuthors, deleteCourse },
      dispatch
    ),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & OwnProps & RouteComponentProps;

const CoursesPage: FunctionComponent<Props> = (props) => {
  const { loadCourses, loadAuthors, deleteCourse, isLoadingCourses } = props;

  React.useEffect(() => {
    loadCourses();
    loadAuthors();
  }, [loadCourses, loadAuthors]);

  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <h1>Courses</h1>
        <Button
          onClick={() => props.history.push("/course")}
          color="primary"
          variant="contained"
        >
          Add Course
        </Button>
      </Box>
      <Divider />
      {isLoadingCourses && (
        <Box marginTop="24px" display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      <Box marginTop="24px">
        <CourseList
          courses={props.courses}
          onDelete={(course) => deleteCourse(course.id)}
        />
      </Box>
    </div>
  );
};

export default connector(CoursesPage);
