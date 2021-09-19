import React from 'react';

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
        </div>
    )
}

export default VideoDetail
