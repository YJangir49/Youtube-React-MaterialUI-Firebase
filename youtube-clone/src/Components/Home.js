import { Typography } from '@material-ui/core'
import React from 'react';
import FilterTags from './FilterTags';
import VideoCard from './VideoCard';

function Home() {
    return (
        <div className="home__container">
            <FilterTags />
            <div className="flex__center">
                <div className="flex flex__wrap videocard__items">
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                    <VideoCard/>
                </div>
            </div>
        </div>
    )
}

export default Home
