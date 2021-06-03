import React from "react";
import {Container, Grid,} from "@material-ui/core";

import {ConverterBlock, CryptoTable} from "./components";
import {useStyles} from "./styles";


function App() {
  const classes = useStyles();


  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CryptoTable classes={classes}/>
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
