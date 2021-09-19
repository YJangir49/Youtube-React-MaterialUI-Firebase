import React from 'react';
// import CardImg from '../Assets/Agabai.png';
import { Avatar, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function VideoCard({title, channelName, views, time, avatar, thumbnail}) {
    return (
        <div className="videocard__container">
            <img src={thumbnail.url} className='videocard__img' />
            <div className="videocard__contentContainer">
                <Avatar src={avatar}/> 
                <div>
                    <Typography variant="subtitle1" component="h6" className='videocard__contentTitle' gutterBottom>{title}</Typography>
                    <div className="flex gap">
                        <Typography variant="subtitle2" component="h6" className='videocard__content' gutterBottom>{channelName}</Typography>
                        <CheckCircleIcon className="icon__verify"/>
                    </div>
                    <Typography variant="subtitle2" component="h6" className='videocard__content' gutterBottom>{views} views • {time}</Typography>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
