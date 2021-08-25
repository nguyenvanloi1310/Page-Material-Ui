import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
    marginTop: 20,
    display: "block",
  },
  color: {
    color: "deeppink",
    "&:hover": {
      color: "red",
    },
  },
});
function TestMasterial() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState("todos");

  const handleClick = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === " ") {
      setTitleError(true);
    }
    if (details === " ") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }

    if (category) {
      console.log(category);
    }
  };

  return (
    <>
      <Container>
        <form noValidate autoComplete="off" onSubmit={handleClick}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.root}
            variant="outlined"
            placeholder="Hãy nhập Title vào đây"
            label="Title..."
            error={titleError}
            required
            fullWidth
            size="small"
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            className={classes.root}
            variant="outlined"
            placeholder="Hãy nhập Content vào đây"
            label="Content..."
            size="small"
            error={detailsError}
            required
            multiline
            rows={5}
            fullWidth
          />
          <FormControl className={classes.root}>
            <FormLabel className={classes.color}>
              You only can one answer !
            </FormLabel>
            <RadioGroup>
              <FormControlLabel
                onChange={(e) => setCategory(e.target.value)}
                value="best"
                control={<Radio />}
                label="The best!"
              />
              <FormControlLabel
                onChange={(e) => setCategory(e.target.value)}
                value="worst"
                control={<Radio />}
                label="The worst !"
              />
              <FormControlLabel
                onChange={(e) => setCategory(e.target.value)}
                value="happy"
                control={<Radio />}
                label="The happy !"
              />
              <FormControlLabel
                onChange={(e) => setCategory(e.target.value)}
                value="cry"
                control={<Radio />}
                label="The cry !"
              />
            </RadioGroup>
            <Button
              type="submit"
              onSubmit={handleClick}
              variant="contained"
              color="secondary"
            >
              Post
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
}

export default TestMasterial;
