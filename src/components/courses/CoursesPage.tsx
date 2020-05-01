import React, { FunctionComponent } from "react";

interface CourseFields {
  title: "";
}

const CoursesPage: FunctionComponent = (props) => {
  const [fields, setFields] = React.useState<CourseFields>({ title: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const { title } = fields;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" value={title} onChange={handleChange} name="title" />
    </form>
  );
};

export default CoursesPage;
