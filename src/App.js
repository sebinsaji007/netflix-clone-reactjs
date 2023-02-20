import './app.css'
import {useState} from 'react'
import React from 'react';
import NavBar from './components/navbar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {actions,orginals,comedy,horror} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title="Netflix orginals"/>
      <RowPost url={actions} title="Action " isSmall />
      <RowPost url={comedy} title="comedy " isSmall />
      <RowPost url={horror} title="Horror " isSmall />
    </div>
  );
}

export default App;


