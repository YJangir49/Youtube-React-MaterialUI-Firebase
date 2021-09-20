import React from 'react';
// import CardImg from '../Assets/Agabai.png';
import { Avatar, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';


function VideoCard({id, title, channelName, views, time, thumbnail}) {
    return (
        <Link to={`/video/${id}`}>
            <div className="videocard__container" >
                <img src={thumbnail.url} className='videocard__img' />
                <div className="videocard__contentContainer">
                    <Avatar src={thumbnail.url}/> 
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
        </Link>
    )
}

export default VideoCard
