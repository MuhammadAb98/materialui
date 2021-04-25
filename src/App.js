import React from 'react';
import { Icon, makeStyles,Button,Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
 const classes=useStyles();

  return (
    <div>
      <div>

    <Button
        variant="contained"
        color="primary"
        //className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
  

      </div>
      <div>
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </div>
    


    </div>
  );
}

export default App;
