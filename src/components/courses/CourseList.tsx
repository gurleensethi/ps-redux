import React, { FunctionComponent } from "react";
import { Course } from "src/types";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  ListItem,
  ListItemText,
  List,
  Divider,
  ListItemIcon,
  Box,
  IconButton,
} from "@material-ui/core";
import { Label, Delete } from "@material-ui/icons";

interface Props {
  courses: Course[];
  onDelete: (course: Course) => void;
}

const CourseList: FunctionComponent<Props & RouteComponentProps> = ({
  courses,
  onDelete,
  history,
}) => {
  return (
    <List>
      {courses.map((course, index) => (
        <ListItem
          key={course.id}
          button
          onClick={() => history.push(`/course/${course.id}`)}
        >
          <ListItemIcon>
            <Label htmlColor="darkblue" />
          </ListItemIcon>
          <ListItemText>
            <Box fontSize="28px">{course.title}</Box>
          </ListItemText>
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              onDelete(course);
            }}
          >
            <Delete htmlColor="red" fontSize="large" />
          </IconButton>
          {index !== courses.length - 1 && <Divider />}
        </ListItem>
      ))}
    </List>
  );
};

export default withRouter(CourseList);
