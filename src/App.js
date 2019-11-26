import React, {useState} from 'react';
import './App.css';
import Intro from './Intro.js'

function App() {
  // let [size, setSize] = useState(false);
  // let [exec, setExec] = useState(false);
  // let [office, setOffice] = useState(false);
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
