import React from 'react';
import FilterTags from './FilterTags';
import VideoCard from './VideoCard';

function Home() {
    return (
        <div className="home__container">
            <FilterTags />
            <div className="flex__center">
                <div className="flex flex__wrap videocard__items">
                    <VideoCard 
                        title="Mann Bharryaa 2.0 - Official Lyric Video | Shershah | ..." 
                        channelName="T-Series" 
                        views="66M" 
                        time="2 days ago"
                        avatar={'ManBhariya.png'}
                    />
                    <VideoCard
                        title="Aga Bai Aiyaa Full Video Song | Rani Mukherjee, Prithviraj ..." 
                        channelName="T-Series" 
                        views="58M" 
                        time="8 months ago"
                        avatar={'AgaBai.png'}/>
                    <VideoCard
                        title="Tune Jo Na Kha Song | New York | John Abrahim ..." 
                        channelName="YRF" 
                        views="130M" 
                        time="2 years ago"
                        avatar={'https://i.ytimg.com/vi/dTu5dTEzVM4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbCSOez6Vi7TUPjqnsHuuagrZZiw'}/>
                    <VideoCard
                        title="Breathless | Shankar Mhadevan [Full Version] ..." 
                        channelName="Lyric Bahu" 
                        views="M" 
                        time="2 months ago"
                        avatar={'https://i.ytimg.com/vi/-eFqg8JnohY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAa1ourE3UraW5iLfAbGaU_JpzoqA'}/>
                    <VideoCard
                        title="Param Sundari - Official Video | Mimi | Kriti Shanon, Pankaj ..." 
                        channelName="Sony Music India" 
                        views="144M" 
                        time="2 months ago"
                        avatar={'https://i.ytimg.com/vi/w4ClQO0FFQg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOIH4BUTEROcrxjfWOnhUho6BsHQ'}
                    />
                    <VideoCard
                        title="Mann Bharryaa 2.0 - Official Lyric Video | Shershah | ..." 
                        channelName="T-Series" 
                        views="66M" 
                        time="2 days ago"
                        avatar={'https://i.ytimg.com/an_webp/cjjofxNQshM/mqdefault_6s.webp?du=3000&sqp=CJ2T_YkG&rs=AOn4CLApvHxhkUd_Nviw6tNOFnmfowLLqw'}/>
                    <VideoCard
                        title="Mann Bharryaa 2.0 - Official Lyric Video | Shershah | ..." 
                        channelName="T-Series" 
                        views="66M" 
                        time="2 days ago"
                        avatar={'https://i.ytimg.com/an_webp/WPQ2R2DjWJY/mqdefault_6s.webp?du=3000&sqp=CKyW_YkG&rs=AOn4CLAZhIvqamvJfEU5BgzxHOOzrzIA4A'}
                    />
                    <VideoCard
                        title="Mann Bharryaa 2.0 - Official Lyric Video | Shershah | ..." 
                        channelName="T-Series" 
                        views="66M" 
                        time="2 days ago"
                        avatar={'https://i.ytimg.com/vi/hOVde-sd9UI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEanfE7k5geCfbgjjKa91LybyEog'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
