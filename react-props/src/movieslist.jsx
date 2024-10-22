import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    // Implement required functionalities here
    const [movies, setMovies] = useState([{title: 'Gilbert Grape', details: 'Released June 1, 1993'},
                                        {title: 'Independence Day', details: 'Released July 4, 1999'},
                                        {title: 'Black Panther', details: 'Released January 23, 2021'},
    ])
    const [showAbout, setShowAbout] = useState(false)

    const toggleAbout = () => setShowAbout(!showAbout)

    return (
        <div>
            <h2>Movie List: </h2>
            {/* Toggle view button */}
            <ul>
                {/* Map through the movies and display them */}
                {movies.map((movie, index)=> (
                    <li key = {index} onClick={toggleAbout}> {movie.title} {showAbout && movie.details} <button className='remove'>Remove</button> </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;