import React, { FunctionComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "src/types";
import { createCourse } from "src/data/courses/courses-actions";

interface OwnProps {}
const mapStateToProps = (state: RootState) => ({
  courses: state.courses,
});
const mapDispatchToProps = {
  createCourse,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & OwnProps;

interface CourseFields {
  title: "";
}

const CoursesPage: FunctionComponent<Props> = (props) => {
  const [fields, setFields] = React.useState<CourseFields>({ title: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.createCourse({ ...fields });
    setFields({ title: "" });
  };

  const { title } = fields;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" value={title} onChange={handleChange} name="title" />
      {props.courses.map((course, index) => (
        <div key={index}>{course.title}</div>
      ))}
    </form>
  );
};
export default connector(CoursesPage);
