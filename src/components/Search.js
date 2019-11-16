import React, { useState } from "react";
import { Paper, IconButton, InputBase, Container, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    padding: "2px 4px",
    margin: "20px 0",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
  },
  input: {
    flex: 1,
    padding: 5
  },
  iconButton: {
    padding: 10
  },
};

const Search = props => {
  const { classes } = props;
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = e => {
    e.preventDefault();
    setSearchValue(e.target.value);
    e.target.value ? props.search(e.target.value) : props.search("man");
  }
  
  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    searchValue ? props.search(searchValue) : props.search("man");
    resetInputField();
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search a movie title"
              inputProps={{ "aria-label": "Search a movie title" }}
              value={searchValue}
              onChange={handleSearchInputChanges}
              type="text"
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={callSearchFunction}
              value="SEARCH"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Search);
