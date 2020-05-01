import React, { FunctionComponent } from "react";
import { CourseFormFields, CourseFormErrors, Author } from "src/types";

interface OwnProps {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  fields: CourseFormFields;
  errors: CourseFormErrors;
  authors: Author[];
  isSaving: boolean;
}

const CourseForm: FunctionComponent<OwnProps> = ({
  authors,
  errors,
  fields,
  isSaving,
  onChange,
  onSubmit,
}) => {
  const { title, authorId } = fields;

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>Title</div>
        <input onChange={onChange} name="title" value={title} />
        <div>{errors.title}</div>
      </div>
      <div>
        <div>Author</div>
        <select value={authorId} name="authorId" onChange={onChange}>
          <option value="">Select an author</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <div>{errors.authorId}</div>
      </div>
      {isSaving && <div>Saving...</div>}
      <button>Save</button>
    </form>
  );
};

export default CourseForm;
