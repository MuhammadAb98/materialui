import React from 'react';
import { Icon, makeStyles,Button,Checkbox,Grid,AppBar,Toolbar,IconButton,Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  test:{
    backgroundColor:"red"
  }
}));

function App() {
 const classes=useStyles();

  return (
    <div>

<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit" className={classes.test}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>

    </div>
  );
}

export default App;
