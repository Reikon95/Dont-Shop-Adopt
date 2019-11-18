import React, { useState, useEffect } from 'react';
import QuestionThree from './QuestionThree';

function QuestionTwo() {
    let [optionOne, setOptionOneClicked] = useState(false);
    let [optionTwo, setOptionTwoClicked] = useState(false);
    let [optionThree, setOptionThreeClicked] = useState(false);


    function handleClickQ1() {
      setOptionOneClicked(true);
    }
    function handleClickQ2() {
        setOptionTwoClicked(true);
    }
    function handleClickQ3() {
        setOptionThreeClicked(true);
    }

    return !optionOne && !optionTwo ? <>
    Great, thanks for that information. How much exercise can you give the dog. 
      Take into account space availability, your commitments and your physical ability/fitness.
      <button onClick={handleClickQ1}>Not much</button> <button onClick={handleClickQ2}>One short walk a day</button> 
      <button onClick={handleClickQ3}>Longer walks and runs</button>
    </> : optionOne ? <QuestionThree/> : optionTwo ? <QuestionThree/> : <QuestionThree/>;
}

export default QuestionTwo;