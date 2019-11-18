import React, { useState, useEffect } from 'react';
import Explanation from './Explanation.js';


function QuestionThree() {
    let dogs = [{id: 'bc01', breed: 'Border Collie', size: 7, activityLevel: 10, officeDog: false, health: true}, {id: 'p01', breed: 'Pug',
    size: 3, activityLevel: 2, officeDog: true, health: false}, {id: 'si01', breed: 'Shiba Inu', size: 5, activityLevel: 7, 
    officeDog: true, health: true}]
    let [optionOne, setOptionOneClicked] = useState(false);
    let [optionTwo, setOptionTwoClicked] = useState(false);

    function handleClickQ1() {
      setOptionOneClicked(true);
    }
      function handleClickQ2() {
        setOptionTwoClicked(true);

}
    return !optionOne && !optionTwo ? <>
   Do you want to take the dog into an office on a regular basis?
      <button onClick={handleClickQ1}>Yes</button><button onClick={handleClickQ2}>No</button>
    </> : optionOne ? <Explanation {...dogs[1]}/> : <Explanation {...dogs[0]}/>;
}

export default QuestionThree;