//TODO - add inputs/forms
import React from 'react';
import './App.css';
import Explanation from './Explanation.js';
import Intro from './Intro.js'


function App() {
  let dogs = [{id: 'bc01', breed: 'Border Collie', size: 7, activityLevel: 10, officeDog: false, health: true}, {id: 'p01', breed: 'Pug',
  size: 3, activityLevel: 2, officeDog: true, health: false}, {id: 'si01', breed: 'Shiba Inu', size: 5, activityLevel: 7, 
  officeDog: true, health: true}]
  return (
    <div className="App">
      <div className="intro">
        <Intro/>
      </div>
      {/* 
      



      <div className="charities">
        Here are some charities that do some fantastic work for dogs and other animals in various parts of the UK.
      </div> */}

    </div>
  );
}

export default App;
