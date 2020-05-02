import React, { FunctionComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState, CreateCourseData } from "src/types";
import { createCourse, loadCourses } from "src/data/courses/courses-actions";
import { bindActionCreators, Dispatch } from "redux";
import CourseList from "./CourseList";
import { loadAuthors } from "src/data/author/author-actions";
import { RouteComponentProps } from "react-router-dom";

interface OwnProps {}

const mapStateToProps = (state: RootState) => ({
  courses: state.courses.courses.map((course) => {
    return {
      ...course,
      author: state.authors.find((author) => author.id === course.authorId),
    };
  }),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ createCourse, loadCourses, loadAuthors }, dispatch),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & OwnProps & RouteComponentProps;

const CoursesPage: FunctionComponent<Props> = (props) => {
  const { loadCourses, loadAuthors } = props;

  React.useEffect(() => {
    loadCourses();
    loadAuthors();
  }, [loadCourses, loadAuthors]);

  return (
    <div>
      <h2>
        Courses{" "}
        <button onClick={() => props.history.push("/course")}>
          Add Course
        </button>
      </h2>
      <CourseList courses={props.courses} />
    </div>
  );
};

export default connector(CoursesPage);
