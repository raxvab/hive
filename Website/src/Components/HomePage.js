import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ScheduleIcon from "@material-ui/icons/Schedule";
import TimelineIcon from "@material-ui/icons/Timeline";
let drawerWidth;
if (window.innerWidth > 600) {
  drawerWidth = 240;
} else {
  drawerWidth = 180;
}
const options = [
  { text: "Analytics", icon: <AssessmentIcon /> },
  { text: "Scheduled Posts", icon: <ScheduleIcon /> },
  { text: "Timeline", icon: <TimelineIcon /> },
];

const NavBar = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  //const mobile = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <Grid container>
            <Grid item xs={4}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                HIVE
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <IconButton style={{ marginLeft: "60%" }}>
                <Link to="/LoginSignUp" className={classes.Link}>
                  <AccountCircleIcon />
                </Link>
              </IconButton>
            </Grid>
            <Grid item xs={3} className={classes.navIcons}>
              <Link to="/" className={classes.Link}>
                <IconButton>
                  <HomeIcon className={classes.ActiveButton} />
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={3} className={classes.navIcons}>
              <Link to="/facebook" className={classes.Link}>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={3} className={classes.navIcons}>
              <Link to="/instagram" className={classes.Link}>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Grid>
            <Grid item xs={3} className={classes.navIcons}>
              <Link to="/twitter">
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          {options.map((ops, idx) => {
            return (
              <ListItem button key={idx}>
                <ListItemIcon>{ops.icon}</ListItemIcon>
                <ListItemText primary={ops.text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* Content Goes here */}
        {props.children}
      </main>
    </div>
  );
};
export default NavBar;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  navIcons: {
    textAlign: "center",
  },
  Link: {
    textDecoration: "none",
    color: "inherit",
  },
  ActiveButton: {
    color: theme.palette.secondary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: "5%",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    //Don't put any left margin here
  },
}));
