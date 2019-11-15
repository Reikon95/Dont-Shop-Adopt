//TODO - add inputs/forms
import React from 'react';
import './App.css';
import Explanation from './Explanation.js';


function App() {
  let dogs = [{id: 'bc01', breed: 'Border Collie', size: 7, activityLevel: 10, officeDog: false, health: true}, {id: 'p01', breed: 'Pug',
  size: 3, activityLevel: 2, officeDog: true, health: false}, {id: 'si01', breed: 'Shiba Inu', size: 5, activityLevel: 7, 
  officeDog: true, health: true}]
  return (
    <div className="App">
      It seems our generation loves dogs a lot. However, many people don't realise how many great rescue dogs are available to adopt. Answer some questions to find your perfect pet!
      So, what size of dog do you want? The main factor here is if you can control it, and the outdoor space you have. Don't get a huge dog in a tiny flat!
      <button>Give me a little dog!</button><button>I'd love a big dog</button>
      
      Great, thanks for that information. How much exercise can you give the dog. 
      Take into account space availability, your commitments and your physical ability/fitness.
      <button>Not much</button> <button>One short walk a day</button> <button>Longer walks and runs</button>
      
      Do you want to take the dog into an office on a regular basis?
      <button>Yes</button><button>No</button>


      <Explanation {...dogs[0]}/>

    </div>
  );
}

export default App;
