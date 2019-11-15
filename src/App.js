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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Explanation dogs[0]/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
