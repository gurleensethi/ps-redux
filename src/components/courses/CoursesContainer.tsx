import React, { FunctionComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState, Course } from "src/types";
import { createCourse, loadCourses } from "src/data/courses/courses-actions";
import { bindActionCreators, Dispatch } from "redux";
import CourseList from "./CourseList";
import { loadAuthors } from "src/data/author/author-actions";

interface OwnProps {}

const mapStateToProps = (state: RootState) => ({
  courses: state.courses.map((course) => {
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
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

type CourseFields = {
  [key in keyof Course]: string;
};

const CoursesPage: FunctionComponent<Props> = (props) => {
  const [fields, setFields] = React.useState<CourseFields>({
    title: "",
    authorId: "",
    id: "",
  });

  const { loadCourses, loadAuthors } = props;

  React.useEffect(() => {
    loadCourses();
    loadAuthors();
  }, [loadCourses, loadAuthors]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.createCourse({ ...fields, authorId: fields.authorId });
    setFields({ title: "", authorId: "", id: "" });
  };

  const { title } = fields;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" value={title} onChange={handleChange} name="title" />
      <CourseList courses={props.courses} />
    </form>
  );
};

export default connector(CoursesPage);
