import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, brown, green, red, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "best") {
        return red[500];
      }
      if (note.category === "happy") {
        return green[500];
      }
      if (note.category === "cry") {
        return yellow[700];
      }
      if (note.category === "worst") {
        return blue[500];
      }
      return brown[500];
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          title={note.title}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
