import React, { FunctionComponent } from "react";
import { Course } from "src/types";

interface Props {
  courses: Course[];
}

const CoursesPage: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      {props.courses.map((course, index) => (
        <div key={index}>{course.title}</div>
      ))}
    </div>
  );
};

export default CoursesPage;
