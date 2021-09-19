import React from 'react';
import FilterTags from './FilterTags';
import VideoCard from './VideoCard';

function Home({videos}) {
    return (
        <>
            <FilterTags />
            <div className="home__container">
                <div className="flex__center">
                    <div className="flex flex__wrap videocard__items">
                    {
                        videos.map(v => <VideoCard 
                            title={v.snippet.title} 
                            channelName={v.snippet.channelTitle}
                            views="66M" 
                            time="2 days ago"
                            thumbnail={v.snippet.thumbnails.medium}
                            id={v.id.videoId}
                        />)
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
