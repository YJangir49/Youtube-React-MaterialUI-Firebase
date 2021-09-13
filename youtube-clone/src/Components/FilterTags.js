import React, {useState} from 'react';
import { makeStyles, Chip } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    filter__container: {
        display: 'flex',
        padding: '1rem 6rem',
        height: "2rem",
        border: "1px solid #303030",
        alignItems: "center",
        gap: '1rem',
        flexWrap: "wrap",
        position: 'fixed',
        backgroundColor: '#181818',
        width: '100%',
        top: '60'
    },
    chipStyle:{
        backgroundColor: '#373737', 
        border: '1px solid #ffffff1a', 
        color: '#fff', 
        fontSize: '0.8rem !important'
    },
}))


function FilterTags() {
    const classes = useStyles();
    return (
        <div className={classes.filter__container}>
           <Chip label="All" />
           <Chip label="Music" className={classes.chipStyle}/>
           <Chip label="Mixes" className={classes.chipStyle}/>
           <Chip label="Kapil Sharma" className={classes.chipStyle}/>
           <Chip label="T-Series" className={classes.chipStyle}/>
           <Chip label="JavaScript" className={classes.chipStyle}/>
           <Chip label="Gaana" className={classes.chipStyle}/>
           <Chip label="Kapil Sharma" className={classes.chipStyle}/>
           <Chip label="T-Series" className={classes.chipStyle}/>
           <Chip label="JavaScript" className={classes.chipStyle}/>
           <Chip label="Gaana" className={classes.chipStyle}/>
           <Chip label="T-Series" className={classes.chipStyle}/>
        </div>
    )
}

export default FilterTags
