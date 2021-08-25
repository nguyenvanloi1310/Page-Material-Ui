import { List, Paper, Popper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";
import FacebookItem from "./FacebookItem";
import InstagramItem from "./InstagramItem";

const options = [FacebookItem, InstagramItem];

export default function MenuShare() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ShareIcon />
      </IconButton>
      <Popper
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Paper>
          <List>
            {options.map((option) => {
              const Option = option;
              return <Option key={option} onClose={handleClose} />;
            })}
          </List>
        </Paper>
      </Popper>
    </div>
  );
}
