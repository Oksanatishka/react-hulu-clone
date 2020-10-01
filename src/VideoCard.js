import React, { forwardRef } from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
// import { ThumbUpSharp } from '@material-ui/icons';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const base_url = 'https://image.tmdb.org/t/p/original/';
// const VideoCard = (props) => {   // destructure

// Comments from <VideoCard> components
// src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg"

//  <p>This film is about coding..</p>
//  <h2>Movie title</h2>
//  <p>Number of likes...</p>
//  <p>{movie.overview}</p>

// textTruncateChild={<a href="#">Read on</a>}
const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videoCard">
            <img
                src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
                alt="movie poster"
            />

            <TextTruncate line={1} element="p" truncateText="..." text={movie.overview} />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard__stats">
                {movie.media_type && `${movie.media_type} •`}
                {movie.release_date || movie.first_air_date} •<span> </span>
                <ThumbUpIcon />
                <span> </span> {movie.vote_count}
            </p>
        </div>
    );
});

export default VideoCard;
