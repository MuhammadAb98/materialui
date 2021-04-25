import React from 'react';
import { Icon, makeStyles,Button,Checkbox,Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
 const classes=useStyles();

  return (
    <div>

   <Grid container spacing={8}>
<Grid item xs={12} style={{backgroundColor:"red"}}>
Hello World 1
</Grid>

<Grid item xs={7} style={{backgroundColor:"blue"}}>
Hello World 2
</Grid>

<Grid item xs={5} style={{backgroundColor:"Green"}}>
Hello World 3
</Grid>

<Grid item xs={6} style={{backgroundColor:"Pink"}}>
Hello World 4
</Grid>

<Grid item xs={6} style={{backgroundColor:"Orange"}}>
Hello World 5
</Grid>
   </Grid>

    </div>
  );
}

export default App;
