import React from "react";
import { CssBaseline, Grid } from '@material-ui/core';

const Header = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction="row" justify="center" alignItems="center" style={{ backgroundColor: "#cfe8fc", height: "20vh" }}>
          <h1>{props.text}</h1>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
