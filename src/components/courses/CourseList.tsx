import React, { FunctionComponent } from "react";
import { Course } from "src/types";

interface Props {
  courses: Course[];
}

const CourseList: FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.courses.map((course, index) => (
        <div key={index}>{course.title}</div>
      ))}
    </div>
  );
};

export default CourseList;
