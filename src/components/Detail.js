import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import Header from './Header';
import { Container, Grid } from "@material-ui/core";



const Detail = (movie) => {
    const { slug } = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const [rating, setRating] = useState([]);

    useEffect(() => {
      fetch(`http://www.omdbapi.com/?i=${slug}&apikey=4a3b711b&plot=full`)
        .then(response => response.json())
        .then(jsonResponse => {
          setMovieInfo(jsonResponse);
          setRating(jsonResponse.Ratings)
        });
    },[slug]);



    return (
      <div>
        <Header text="MOVIE DETAIL" />
        <Container>
            {slug}
          <Grid container direction="column" spacing={2}>
            <Grid item>Type: {movieInfo.Type}</Grid>
            <Grid item>Title: {movieInfo.Title}</Grid>
            <Grid item>Year: {movieInfo.Year}</Grid>
            <Grid item>Runtime: {movieInfo.Runtime}</Grid>
            <Grid item>Director: {movieInfo.Director}</Grid>
            <Grid item>Production: {movieInfo.Production}</Grid>
            <Grid item>Actors: {movieInfo.Actors}</Grid>
            <Grid item>Awards: {movieInfo.Awards}</Grid>
            <Grid item>Box Office: {movieInfo.BoxOffice}</Grid>
            <Grid item>Country: {movieInfo.Country}</Grid>
            <Grid item>DVD: {movieInfo.DVD}</Grid>
            <Grid item>Genre: {movieInfo.Genre}</Grid>
            <Grid item>Language: {movieInfo.Language}</Grid>
            <Grid item>Metascore: {movieInfo.Metascore}</Grid>
            <Grid item>Plot: {movieInfo.Plot}</Grid>
            <Grid item>Poster: {movieInfo.Poster}</Grid>
            <Grid item>Rated: {movieInfo.Rated}</Grid>
            
            <Grid item>Released: {movieInfo.Released}</Grid>
            <Grid item>Website: {movieInfo.Website}</Grid>
            <Grid item>IMDB Rating: {movieInfo.imdbRating}</Grid>
            <Grid item>IMDB Votes: {movieInfo.imdbVotes}</Grid>
          </Grid>
        </Container>
      </div>
    );
}

export default Detail
