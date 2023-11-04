import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  function handleDelete(id) {
    console.log(id);
    // fetch(
    //   `https://practice-fetch-3eef9-default-rtdb.firebaseio.com/movies.json/${id}`,
    //   {
    //     method: "DELETE",
    //   }
    // );
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={() => handleDelete(props.id)}>Delete</button>
    </li>
  );
};

export default Movie;
