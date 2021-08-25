import {
  ListItem,
  ListItemText,
  TextField,
  Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const top100Films = [
  { title: "Nguyễn Văn A", year: 1994 },
  { title: "Trần C", year: 1972 },
  { title: "Lê Thị D", year: 1974 },
  { title: "Hoàng Văn K", year: 2008 },
  { title: "Trần Đình X", year: 1980 },
  { title: "Phan Y", year: 1931 },
  { title: "Đình Ngô Q", year: 2000 },
  { title: "Tường Vy", year: 2001 },
  { title: "Hoàng Hoa", year: 1952 },
  { title: "Đình Công", year: 1995 },
  { title: "Hữu Thọ", year: 1948 },
  { title: "Quang Tiến", year: 1921 },
];
export default function FacebookItem({ onClose }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    onClose();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ListItem button onClick={handleClickOpen}>
        <ListItemText primary="Facebook" />
      </ListItem>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Bạn muốn chia sẻ cho những ai trên Facebook</DialogTitle>
        <DialogContent>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={[top100Films[10]]}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Bạn bè của tôi"
                placeholder="Hãy chọn bạn bè"
              />
            )}
          />
          <br />
          <Typography>
            <b>Lưu ý:</b> Chỉ chia sẽ với những người bạn mà bạn quen biết !
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="default">
            Huỷ
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Gửi
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
