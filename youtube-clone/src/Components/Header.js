import React, {useState, useEffect} from 'react';
import { makeStyles, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import MicIcon from '@material-ui/icons/Mic';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { YoutubeLogo } from '../Assets/SVGComponents';



const useStyles = makeStyles(() => ({
    logo: {
        height: '60px',
        width: '120px',
        margin: '0 0.7rem',
        cursor: 'pointer'
    },
    Header: {
        backgroundColor: "#202020",
        display: 'flex',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100
    },
    LogoContainer: {
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
    },
    menuIcon:{
        cursor: 'pointer',
        width: '1.5rem',
        height: "1.5rem"
    },
    searchIcon: {
        backgroundColor: '#303030',
        width: '65px',
        border: '3px solid #303030',
        cursor: 'pointer',
        borderRadius: '0 2px 2px 0',
        height: '27px'
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        flexBasis: "55%",
    },
    searchInputContainer: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #303030',
        backgroundColor: 'black',
        padding: '2px',
        flex: '0.9',
        height: '27px'
    },
    searchInputContainerOnFocus: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #3478b3',
        backgroundColor: 'black',
        padding: '2px',
        flex: '0.9',
        height: '27px'
    },
    searchInput: {
        color: '#fff',
        border: 'none',
        backgroundColor: 'inherit',
        '&:focus':{
            outline: 'none'
        },
        padding: '0 10px',
        width: '100%'
    },
    clearIcon:{
        cursor: 'pointer'
    },
    micIcon:{
        cursor: 'pointer',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '50%',
        padding: '6px',
        marginLeft: '10px',
        height: "1.5rem",
        width: '1.5rem'
    },
    appIcon:{
        cursor: 'pointer',
        backgroundColor: '#303030',
        color: '#fff',
        borderRadius: '50%',
        padding: '5px',
        marginLeft: '5px',
        height: "1.5rem",
        width: '1.5rem'
    },
    signInButton: {
        color: '#3ea6ff',
        border: '1px solid #3ea6ff',
        fontWeight: '600'
    },
    iconsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        margin: '0 1rem'
    }
}))


function Header({handleSubmit}) {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        handleSubmit('latest');
    }, [])

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
          handleSubmit(searchTerm);
        }
    }

    return (
        <div className={classes.Header}>
            <div className={classes.LogoContainer}>
                <MenuIcon className={classes.menuIcon}/>
                <YoutubeLogo classes={classes}/>
            </div>
            <div className={classes.searchContainer}>
                <div className={focus ? classes.searchInputContainerOnFocus: classes.searchInputContainer}>
                    <input 
                        type="text" 
                        id="search" 
                        name="searchInput" 
                        className={classes.searchInput} 
                        placeholder="Search"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onKeyPress={onKeyPress}
                    />
                    {searchTerm && <ClearIcon className={classes.clearIcon} onClick={() => setSearchTerm('')}/>}
                </div>
                <SearchIcon className={classes.searchIcon} onClick={() => handleSubmit(searchTerm)}/>
                <MicIcon className={classes.micIcon}/>
            </div>
            <div className={classes.iconsContainer}>
                <AppsOutlinedIcon className={classes.appIcon}/>
                <MoreVertOutlinedIcon className={classes.appIcon}/>
                <Button
                    variant="outlined"
                    size="medium"
                    className={classes.signInButton}
                    startIcon={<AccountCircleOutlinedIcon style={{fontSize: '1.8rem'}}/>}
                >
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Header
