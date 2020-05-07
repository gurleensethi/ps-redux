import React, { FunctionComponent } from "react";
import { CourseFormFields, CourseFormErrors, Author } from "src/types";
import {
  TextField,
  Select,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  CircularProgress,
} from "@material-ui/core";

interface OwnProps {
  onChange: (
    event: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | { name?: string | undefined; value: any }
    >
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
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <FormControl fullWidth error={!!errors.title}>
        <TextField
          label="Title"
          onChange={onChange}
          value={title}
          fullWidth
          name="title"
        />
        <FormHelperText>{errors.title}</FormHelperText>
      </FormControl>
      <FormControl fullWidth margin="normal" error={!!errors.authorId}>
        <InputLabel>Author</InputLabel>
        <Select value={authorId} name="authorId" onChange={onChange} fullWidth>
          <MenuItem value="">Select an author</MenuItem>
          {authors.map((author) => (
            <MenuItem key={author.id} value={author.id}>
              {author.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.authorId}</FormHelperText>
      </FormControl>
      {isSaving && (
        <div>
          <Box component="span" marginRight="8px">
            <CircularProgress size={12} />
          </Box>
          Saving...
        </div>
      )}
      <Box marginTop="24px">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isSaving}
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

export default CourseForm;
