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
      
      Great, thanks for that information. How much exercise can you give the dog. 
      Take into account space availability, your commitments and your physical ability/fitness.
      <button>Not much</button> <button>One short walk a day</button> <button>Longer walks and runs</button>
      
      Do you want to take the dog into an office on a regular basis?
      <button>Yes</button><button>No</button>


      <Explanation {...dogs[1]}/>

      <div className="charities">
        Here are some charities that do some fantastic work for dogs and other animals in various parts of the UK.
      </div> */}

    </div>
  );
}

export default App;
