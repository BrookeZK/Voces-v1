import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import VideosPage from './Components/Video/VideosPage';
import EditorialPage from './Components/Editorial/EditorialPage';
import LetterToEdiorPage from './Components/LetterToEdior/LetterToEdiorPage';
import CommunityVoicesPage from './Components/CommunityVoices/CommunityVoicesPage';
import AboutPage from './Components/About/AboutPage';
import NewsPage from './Components/News/NewsPage';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/vidéos' component={VideosPage} />
        <Route exact path='/editorial' component={EditorialPage} />
        <Route exact path='/cartas-a-la-editora' component={LetterToEdiorPage} />
        <Route exact path='/voces-de-la-communidad' component={CommunityVoicesPage} />
        <Route exact path='/notícias' component={NewsPage} />
        <Route exact path='/quiénes-sómos' component={EditorialPage} />
      </Switch>
      <Home />
    </div>
  );
}

export default App;
