import React from 'react';
import logo from './logo.svg';
import './App.css';
import Explanation from './Explanation.js'

function App() {
  const dogs = [{id: 'bc01', breed: 'Border Collie', size: 7, activityLevel: 10, officeDog: false, health: 10}, {id: 'p01', breed: 'Pug',
  size: 3, activityLevel: 2, officeDog: true, health: 2}, {id: 'si01', breed: 'Shiba Inu', size: 5, activityLevel: 7, 
  officeDog: true, health: 10}]
  return (
    <div className="App">
      It seems our generation loves dogs a lot. However, many people don't realise how many great rescue dogs are available to adopt. Answer some questions to find your perfect pet!
      <Explanation {...dogs[1]}/>
    </div>
  );
}

export default App;
