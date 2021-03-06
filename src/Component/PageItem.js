import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import { red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import MenuShare from "../pages/MenuShare";
import DemoPicker from "./DemoPicker";
import { Link as RouterLink } from "react-router-dom";
PageItem.propTypes = {
  title: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    textAlign: "right",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  action: {
    marginTop: "auto",
  },

  icon: {
    "&:hover": {
      color: "red",
    },
  },
}));

const imgRandoms = [
  "https://www.mercedes-benz.com.vn/vi/passengercars/mercedes-benz-cars/amg/_jcr_content/par/textimagecombination/image.MQ6.12.image.20201210073406.jpeg",
  "https://i.pinimg.com/originals/19/48/10/19481092dce2afe21f52374633647df7.jpg",
  "https://cms-i.autodaily.vn/du-lieu/2018/07/26/range-rover-2019rr-19my-250718-04.JPG",
  "https://i.pinimg.com/originals/b5/66/af/b566af32af236481d02e6e2e06003b73.jpg",
  "https://cafebiz.cafebizcdn.vn/2019/11/22/photo-1-15744133602491143626658.jpg",
  "https://photo-cms-plo.zadn.vn/w800/Uploaded/2021/tmuihk/2020_04_09/xe-do-1_romj.jpg",
  "https://znews-photo.zadn.vn/w660/Uploaded/lce_cjvcc/2019_11_20/McLaren_650S_Spider_LB_zing_44_1.jpg",
  "https://i.pinimg.com/originals/e3/89/5f/e3895faa2a7ec578dcd46285f6a2ae9b.jpg",
  "https://danchoioto.vn/wp-content/uploads/2019/04/gia-xe-bugatti-chiron-e1592642572684.jpg",
];

const getRandomImg = () => {
  const index = Math.floor(Math.random() * imgRandoms.length);
  return imgRandoms[index];
};

export default function PageItem({ title, content }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <>
              <IconButton onClick={handleClickOpen} aria-label="settings">
                <DeleteOutlineOutlined />
              </IconButton>
              <Dialog
                open={open}
                onClose={handleClose}
                //   PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
              >
                <DialogTitle
                  style={{ cursor: "move" }}
                  id="draggable-dialog-title"
                >
                  B???n mu???n xo?? b??i vi???t n??y ?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    N???u b???n xo?? b??i vi???t n??y th?? s??? m???t v??nh vi???n, n??n h??y c??n
                    nh???c tr?????c khi xo?? nh?? !
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    autoFocus
                    onClick={handleClose}
                    color="default"
                  >
                    Hu???
                  </Button>
                  <Button variant="contained" color="primary">
                    Xo??
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          }
          title={<Link>{title}</Link>}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={getRandomImg()}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.action}>
          <IconButton className={classes.icon} aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <MenuShare />
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            //   aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <b>B???n c?? th??? g??p ?? v?? ????nh gi??:</b>
            </Typography>
            <Typography paragraph>
              Ch??ng t??i c???n m???t s??? th??ng tin c?? nh??n t??? b???n ????? nh???m n??ng cao
              ch???t l?????ng ????nh gi?? th???c h??n, r???t c???m ??n n???u b???n h???p t??c !
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  variant="outlined"
                  label="H??? v?? t??n"
                  placeholder="Nh???p h??? v?? t??n c???a b???n"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  variant="outlined"
                  label="?????a ch???"
                  placeholder="Nh???p ?????a ch??? c???a b???n"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  variant="outlined"
                  label="Email"
                  placeholder="Nh???p email c???a b???n"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  fullWidth
                  variant="outlined"
                  label="G??p ?? v?? ????nh gi??"
                  placeholder="H??y ??i???n nh???ng g??p ?? v?? ????nh c???a b???n cho ch??ng t??i nh?? ^ ^"
                  multiline
                  rows={5}
                />
              </Grid>
            </Grid>
            <DemoPicker />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label={
                <Typography variant="body2">
                  T??ch v??o n???u b???n c???m th???y h??i l??ng !
                </Typography>
              }
            />

            <Box className={classes.button}>
              <Button variant="contained">Hu???</Button>
              <Button
                // onClick={expanded}
                variant="contained"
                color="secondary"
                to="/create"
                component={RouterLink}
              >
                G???i
              </Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
