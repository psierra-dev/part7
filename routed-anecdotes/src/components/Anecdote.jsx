import React from "react";
import {Link} from "react-router-dom";

const Anecdote = ({anecdote}) => {
  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>has {anecdote.votes} votes</p>
      <p>
        for more info see{" "}
        <Link to={anecdote.info} target="blank">
          {anecdote.info}
        </Link>
      </p>
    </div>
  );
};

export default Anecdote;
