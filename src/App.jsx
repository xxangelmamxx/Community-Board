import React from 'react';
import './App.css';
import EventsBoard from './components/EventsBoard';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src='/src/components/header.png'></img>
        <h1>Food Truck Favorites</h1>
      </header>
      <EventsBoard />
    </div>
  );
}

export default App;
