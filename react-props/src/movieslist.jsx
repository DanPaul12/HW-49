import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    // Implement required functionalities here
    const [movies, setMovies] = useState(['Gilbert Grape', 'Independence Day', 'Black Panther'])

    return (
        <div>
            {/* Toggle view button */}
            <ul>
                {/* Map through the movies and display them */}
                {movies.map((movie)=> (
                    <li>{movie}</li>
                ))}
            </ul>
        </div>
    );
};
export default MoviesList;