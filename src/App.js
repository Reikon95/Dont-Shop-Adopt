import React from 'react';
import './App.css';
import Intro from './Intro.js'

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>Why rescue a dog?</li>
          <a href="https://portfolio.cameronjwblackwood.now.sh/" target="_blank" rel="noopener noreferrer"><li>More about me</li></a>        
        </ul>
      </div>
      <div className="intro">
        <Intro/>
      </div>
    </div>
  );
}

export default App;
