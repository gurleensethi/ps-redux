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
import { loadingSelector } from "src/data/loading/loadig-selector";
import { CourseActions } from "src/data/courses/courses-types";
import { Container, CircularProgress, Box } from "@material-ui/core";
import { AuthorActionType } from "src/data/author/author-type";

type OwnProps = RouteComponentProps<{ courseId: string }>;

const mapStateToProps = (state: RootState) => {
  return {
    course: state.courses.course,
    authors: state.authors,
    isLoadingCourse: loadingSelector(state, [
      CourseActions.LoadCourseRequest,
      AuthorActionType.LoadAuthorsRequest,
    ]),
    isSavingCourse: loadingSelector(state, [
      CourseActions.CreateCourseRequest,
      CourseActions.UpdateCourseRequest,
    ]),
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
    isLoadingCourse,
  } = props;

  // Component State
  const [isSaving, setSaving] = React.useState(false);
  const [fields, setFields] = React.useState<CourseFormFields>({
    authorId: "",
    title: "",
  });
  const [errors, setErrors] = React.useState<CourseFormErrors>({});

  React.useEffect(() => {
    if (courseId) {
      loadCourse(courseId);
    }
    loadAuthors();
  }, [loadAuthors, loadCourse, courseId]);

  React.useEffect(() => {
    if (course) {
      setFields({ ...course });
    }
  }, [course]);

  const handleChange = (event: React.ChangeEvent<any>) => {
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
    <Container>
      <Box display="flex" flexDirection="column" marginTop="24px">
        {isLoadingCourse && (
          <CircularProgress style={{ alignSelf: "center" }} />
        )}
        {!isLoadingCourse && (
          <>
            <h1>Add new course</h1>
            <CourseForm
              fields={fields}
              errors={errors}
              onChange={handleChange}
              onSubmit={handleSubmit}
              authors={props.authors}
              isSaving={isSaving}
            />
          </>
        )}
      </Box>
    </Container>
  );
};

export default connector(ManageCoursePage);
