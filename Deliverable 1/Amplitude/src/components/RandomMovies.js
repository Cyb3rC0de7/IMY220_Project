//u21669849, Qwinton Knocklein
import React from 'react';

function RandomMovies({ movies }) {
    return (
        <ul>
            {movies.map((movie, index) => (
                <li key={index}>
                    <h2>{movie.title}:</h2><p>{movie.description}</p>
                </li>
            ))}
        </ul>
    );
}

export default RandomMovies;
