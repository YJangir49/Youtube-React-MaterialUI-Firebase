import { Typography } from '@material-ui/core'
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';

function SideMenubar() {
    return (
        <div className="sidebar__container">
            <div className="sidebar__iconContainer">
                <HomeIcon className={"icon__menu"}/>
                <Typography component="p" variant="body2">Home</Typography>
            </div>
            <div className="sidebar__iconContainer">
                <ExploreOutlinedIcon className={"icon__menu"}/>
                <Typography component="p" variant="body2">Explore</Typography>
            </div>
            <div className="sidebar__iconContainer">
                <SubscriptionsOutlinedIcon className={"icon__menu"}/>
                <Typography component="p" variant="body2">Subscriptions</Typography>
            </div>
            <div className="sidebar__iconContainer">
                <VideoLibraryOutlinedIcon className={"icon__menu"}/>
                <Typography component="p" variant="body2">Library</Typography>
            </div>
            <div className="sidebar__iconContainer">
                <HistoryOutlinedIcon className={"icon__menu"}/>
                <Typography component="p" variant="body2">History</Typography>
            </div>
        </div>
    )
}

export default SideMenubar
