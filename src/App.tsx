import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import MainContent from './component/MainContent';


import './App.css';
import MusicDetail from './component/MusicDetail';

const App: React.FC = () => {

	


return (


      <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
      
            <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/music/:artist/:track" element={<MusicDetail />} />
            </Routes>
        </div>
      </div>
      </Router>

  

  );
};


  

export default App;

