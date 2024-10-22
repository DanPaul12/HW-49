import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    // Implement required functionalities here
    const [movies, setMovies] = useState([{title: 'Gilbert Grape', details: 'Released June 1, 1993', showAbout: false, genre: 'sadboi'},
                                        {title: 'Independence Day', details: 'Released July 4, 1999', showAbout: false, genre: 'action'},
                                        {title: 'Black Panther', details: 'Released January 23, 2021', showAbout: false, genre: 'action'},
    ])
    const toggleAbout = (index1) => {
        const setShowAbout = movies.map((movie, index2) => index1 === index2 ? {...movie, showAbout:!movie.showAbout}: movie)
        setMovies(setShowAbout)
    }
    const removeMovie = (index1) => {
        const filterMovie = movies.filter(movie => movie.index !== index1 )
        setMovies(filterMovie)}

    return (
        <div>
            <h2>Movie List: </h2>
            {/* Toggle view button */}
            <ul>
                {/* Map through the movies and display them */}
                {movies.map((movie, index)=> (
                    <li key = {index} onClick={() => toggleAbout(index)}> {movie.title} -- {movie.showAbout && movie.details} <button className='remove' onClick={() => removeMovie(index)}>Remove</button> </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;