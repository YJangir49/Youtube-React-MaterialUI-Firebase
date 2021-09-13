import red from '@material-ui/core/colors/red';
import { createTheme, responsiveFontSizes  } from '@material-ui/core/styles';

export const customizeTheme = {
  breakpoints: {
    values: {
      xs:0,
      sm:768,
      md:992,
      lg:1280,
      xl:1920
    },
  },
  palette: {
    primary:{
      main:'#1faf4a',
      contrastText: '#fff',
    },
    secondary:{
      main:'#13477a',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Signika Negative, sans-serif' ,
    fontSize:18,
    h1:{
      fontWeight: 600, 
      fontSize:'3.6rem', 
    },
    h2:{
      fontWeight: 600,
      fontSize:'3rem', 
    },
    h3:{
      fontWeight: 600, 
      fontSize:'2.4rem',
    },
    h4:{
      fontWeight: 600,
      fontSize:'2rem', 
    },
    h5:{
      fontWeight: 600, 
      fontSize:'1.6rem',
    },
    h6:{
      fontWeight: 600,
      fontSize:'1.4rem',
    },
    body2:{
        fontSize: "0.6rem"
    },
    subtitle1:{
        fontSize: "14px",
        fontWeight: 550,
        lineHeight: 1.5
    }, 
    subtitle2:{
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.5
    } 
  },
}

const theme = responsiveFontSizes(createTheme(customizeTheme));

export default theme;


