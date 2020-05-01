import React, { FunctionComponent } from "react";
import { RootState, CourseFormErrors, CourseFormFields } from "src/types";
import { connect, ConnectedProps } from "react-redux";
import CourseForm from "./CourseForm";
import { RouteComponentProps } from "react-router-dom";
import { loadAuthors } from "src/data/author/author-actions";
import { loadCourse } from "src/data/courses/courses-actions";

interface OwnProps {}

const mapStateToProps = (state: RootState) => {
  return {
    course: state.courses.course,
    authors: state.authors,
  };
};

const mapDispatchToProps = {
  loadAuthors,
  loadCourse,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> &
  OwnProps &
  RouteComponentProps<{ courseId: string }>;

const ManageCoursePage: FunctionComponent<Props> = (props) => {
  const {
    loadAuthors,
    loadCourse,
    match: {
      params: { courseId },
    },
    course,
  } = props;

  const [isSaving, setSaving] = React.useState(false);
  const [isLoadingCourse, setLoadingCourse] = React.useState(false);

  const [fields, setFields] = React.useState<CourseFormFields>({
    authorId: "",
    title: "",
  });

  const [errors, setErrors] = React.useState<CourseFormErrors>({});

  React.useEffect(() => {
    if (courseId) {
      setLoadingCourse(true);
      loadCourse(courseId).then((result) => {
        setLoadingCourse(false);
      });
    }
    loadAuthors();
  }, [loadAuthors, loadCourse, courseId]);

  React.useEffect(() => {
    if (course) {
      setFields({ ...course });
    }
  }, [course]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  // no course was found
  if (courseId && !isLoadingCourse && !course) {
    return <div>No course found!</div>;
  }

  return (
    <div>
      {isLoadingCourse && <p>Loading...</p>}
      {!isLoadingCourse && (
        <CourseForm
          fields={fields}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          authors={props.authors}
          isSaving={isSaving}
        />
      )}
    </div>
  );
};

export default connector(ManageCoursePage);
