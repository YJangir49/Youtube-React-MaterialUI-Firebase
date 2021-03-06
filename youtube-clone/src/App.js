import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Header from './Components/Header';
import SideMenubar from './Components/SideMenubar';
import Home from './Components/Home';
import VideoDetail from './Containers/VideoDetail';
import theme from './Theme/defaultTheme';
import youtube from './API/youtube-api';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
const [videos, setVideos] = useState([]);


  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header handleSubmit={handleSubmit}/>
          <SideMenubar/>
          <Switch>
            <Route exact path="/video/:id" component={VideoDetail}/>
            <Route path="/" component={() => <Home videos={videos}/>}/>
          </Switch>
      </div>
    </ThemeProvider>    
  );

  async function handleSubmit(searchTerm) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 40,
        key: 'YOUR_KEY',
        q: searchTerm,
      }
    });
    setVideos(videos);
    console.log(videos);
  }
}


export default App;
