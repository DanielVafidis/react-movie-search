import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardActionArea, Typography, CardMedia, CardContent, Card } from '@material-ui/core';
import {Link} from 'react-router-dom'
const styles = {
  card: {
  },
  media: {
    minHeight: "450px"
  },
  link: {
    textDecoration: "none"
  }
};

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB483791896_.png";

const Movie = (props) => {
  const {classes} = props;
  const poster = props.movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : props.movie.Poster;
  return (
    <Link to={`/${props.movie.imdbID}`} className={classes.link}>
      <Card className={classes.card} elevation={3}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={poster}
            title={props.movie.Title}
          />
          <CardContent>
            <Typography className={classes.typography} gutterBottom variant="h5" component="h2" noWrap>
              {props.movie.Title}
            </Typography>
            <Typography className={classes.typofraphy} variant="body2" color="textSecondary" component="p" >
              ({props.movie.Year})
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

Movie.propTypes = {
  classes: PropTypes.object,
  movie : PropTypes.object
};

export default withStyles(styles)(Movie);
