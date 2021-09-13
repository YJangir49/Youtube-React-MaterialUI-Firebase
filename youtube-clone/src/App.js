import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Header from './Components/Header';
import SideMenubar from './Components/SideMenubar';
import Home from './Components/Home';
import theme from './Theme/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header />
          <SideMenubar/>
          <Home />
      </div>
    </ThemeProvider>    
  );
}

export default App;
