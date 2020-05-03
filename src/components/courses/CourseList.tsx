import React, { FunctionComponent } from "react";
import { Course } from "src/types";
import { Link } from "react-router-dom";

interface Props {
  courses: Course[];
}

const CourseList: FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.courses.map((course) => (
        <Link to={`/course/${course.id}`} key={course.id}>
          <div>{course.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
