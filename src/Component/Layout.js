import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px )`,
      background: "White",
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});
export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "Danh sách nhật kí",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Viết bài",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
    {
      text: "Demo Dialog",
      icon: <BorderColorIcon color="primary" />,
      path: "/dialog",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.date} color="textSecondary">
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography color="textSecondary">Duck Crazy</Typography>

          <Avatar
            className={classes.avatar}
            src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/16/2021-08-16-174044-1629112757495576649160.jpg"
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            My Diarys
          </Typography>
        </div>
        {/* list / links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
