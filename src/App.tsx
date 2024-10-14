import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Listing from './pages/Listing/Listin';
import { Route, Routes } from 'react-router-dom';
import Chapter from './pages/Chapter/Chapter';
import Details from './pages/Details/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='' element={<Listing />} />
        <Route path='' element={<Chapter />} />
        <Route path='' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
