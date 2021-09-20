import React from 'react';
import { Typography } from '@material-ui/core';

function VideoDetail({ match }) {
    return (
        <div className="videoPlayer__container">
            <iframe
                frameBorder="0"
                height="100%"
                width="100%"
                title="Video Player"
                src={`https://www.youtube.com/embed/${match.params.id}`}
            />
            <Typography >Hum Dil De Chuke Sanam | Hum Dil De Chuke Sanam</Typography>
        </div>
    )
}

export default VideoDetail
