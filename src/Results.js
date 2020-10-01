import React, { useEffect, useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
// import requests from './requests';
import FlipMove from 'react-flip-move';

const Results = ({ selectedOption }) => {
    // const [movies, setMovies] = useState(['1', '2']);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // run this code EVERY time the Results component loads/ mounts
        async function fetchData() {
            // const request = await axios.get(requests.fetchActionMovies);
            const request = await axios.get(selectedOption);
            // console.log('REQUEST >>>', request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption]);

    // if you pass a key in, it knows that this is the same component,
    // i don't need to change that one or this one's changed i need to change that one
    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    );
};

export default Results;
