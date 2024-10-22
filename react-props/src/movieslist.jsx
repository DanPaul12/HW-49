import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    // Implement required functionalities here
    const [movies, setMovies] = useState(['Gilbert Grape', 'Independence Day', 'Black Panther'])
    const [showAbout, setShowAbout] = useState(true)

    return (
        <div>
            <h2>Movie List: </h2>
            {/* Toggle view button */}
            <ul>
                {/* Map through the movies and display them */}
                {movies.map((movie)=> (
                    <li>{movie} <button className='remove'>Remove</button> </li>
                ))}
            </ul>
        </div>
    );
};
export default MoviesList;