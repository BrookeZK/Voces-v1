import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import VideosPage from './Components/Video/VideosPage';
import EditorialPage from './Components/Editorial/EditorialPage';
import LetterToEditorPage from './Components/LetterToEditor/LetterToEditorPage';
import CommunityVoicesPage from './Components/CommunityVoices/CommunityVoicesPage';
import AboutPage from './Components/About/AboutPage';
import NewsPage from './Components/News/NewsPage';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/videos' component={VideosPage} />
        <Route exact path='/editorial' component={EditorialPage} />
        <Route exact path='/cartas-a-la-editora' component={LetterToEditorPage} />
        <Route exact path='/tu-voz' component={CommunityVoicesPage} />
        <Route exact path='/noticias' component={NewsPage} />
        <Route exact path='/quienes-somos' component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
