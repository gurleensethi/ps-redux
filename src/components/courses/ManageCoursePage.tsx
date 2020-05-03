import React, { FunctionComponent } from "react";
import { RootState, CourseFormErrors, CourseFormFields } from "src/types";
import { connect, ConnectedProps } from "react-redux";
import CourseForm from "./CourseForm";
import { RouteComponentProps } from "react-router-dom";
import { loadAuthors } from "src/data/author/author-actions";
import {
  loadCourse,
  createCourse,
  updateCourse,
} from "src/data/courses/courses-actions";
import Spinner from "../common/Spinner";

type OwnProps = RouteComponentProps<{ courseId: string }>;

const mapStateToProps = (state: RootState) => {
  return {
    course: state.courses.course,
    authors: state.authors,
  };
};

const mapDispatchToProps = {
  loadAuthors,
  loadCourse,
  createCourse,
  updateCourse,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & OwnProps;

const ManageCoursePage: FunctionComponent<Props> = (props) => {
  const {
    loadAuthors,
    loadCourse,
    createCourse,
    updateCourse,
    match: {
      params: { courseId },
    },
    course,
  } = props;

  // Component State
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
    const _errors: CourseFormErrors = {};
    if (!fields.title) _errors.title = "Title is required";
    if (!fields.authorId) _errors.authorId = "Author id is required";
    setErrors(_errors);
    const hasNoErrors = Object.keys(_errors).length === 0;
    if (hasNoErrors) {
      setSaving(true);
      if (!courseId) {
        createCourse(fields).then(() => props.history.push("/courses"));
      } else {
        updateCourse(courseId, fields).then(() =>
          props.history.push("/courses")
        );
      }
    }
  };

  // no course was found
  if (courseId && !isLoadingCourse && !course) {
    return <div>No course found!</div>;
  }

  return (
    <div>
      {isLoadingCourse && <Spinner />}
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
