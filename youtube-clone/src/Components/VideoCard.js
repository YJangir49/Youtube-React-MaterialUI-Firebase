import React from 'react';
import CardImg from '../Assets/Agabai.png';
import { Avatar, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function VideoCard() {
    return (
        <div className="videocard__container">
            <img src={CardImg} className='videocard__img'/>
            <div className="videocard__contentContainer">
                <Avatar src={CardImg}/> 
                <div>
                    <Typography variant="subtitle1" component="h6" className='videocard__contentTitle' gutterBottom>Aga Bai Aiyaa Full Video Song | Rani Mukherjee, Prithviraj...</Typography>
                    <div className="flex gap">
                        <Typography variant="subtitle2" component="h6" className='videocard__content' gutterBottom>T-Series</Typography>
                        <CheckCircleIcon className="icon__verify"/>
                    </div>
                    <Typography variant="subtitle2" component="h6" className='videocard__content' gutterBottom>58M views • 8 years ago</Typography>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
