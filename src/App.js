import React from 'react';
import './App.css';
import Explanation from './Explanation.js'

function App() {
  const dogs = [{id: 'bc01', breed: 'Border Collie', size: 7, activityLevel: 10, officeDog: false, health: true}, {id: 'p01', breed: 'Pug',
  size: 3, activityLevel: 2, officeDog: true, health: false}, {id: 'si01', breed: 'Shiba Inu', size: 5, activityLevel: 7, 
  officeDog: true, health: true}]
  return (
    <div className="App">
      It seems our generation loves dogs a lot. However, many people don't realise how many great rescue dogs are available to adopt. Answer some questions to find your perfect pet!
      <Explanation {...dogs[0]}/>
    </div>
  );
}

export default App;
