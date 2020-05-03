import React, { FunctionComponent } from "react";
import { Course } from "src/types";
import { Link } from "react-router-dom";

interface Props {
  courses: Course[];
  onDelete: (course: Course) => void;
}

const CourseList: FunctionComponent<Props> = ({ courses, onDelete }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={`/course/${course.id}`}>{course.title} </Link>
          <button onClick={() => onDelete(course)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
