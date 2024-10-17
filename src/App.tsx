import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Episode from './pages/Episode/Episode';
import Podcast from './pages/Podcast/Podcast';
import { Provider } from 'react-redux';
import Store from './Store/store';
import PodcastList from './pages/PodcastList/PodcastList';

const BASE_CLASS = "App"

const App = () => {

  return (
    <Provider store={Store}>
    <div className={BASE_CLASS}>
      <Header />
      
      <Routes>
        <Route path='' element={<PodcastList />} />
        <Route path='/podcast/:podcastId' element={<Podcast />} />
        <Route path='/podcast/:podcastId/episode/:episodeId' element={<Episode />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
