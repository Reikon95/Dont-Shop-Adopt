import React, {useState} from 'react';
import './App.css';
import Intro from './Intro.js'

function App() {
  let [score, setScore] = useState(false);

  //todo: add a funcionality keeping the 'score' in state. Finalise with an array, give them the results. Migrate all data to mongodb?
  //Going to finish Kodiri first to understand this a little better

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
