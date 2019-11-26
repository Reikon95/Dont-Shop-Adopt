import React, { useState, useEffect } from 'react';
import QuestionTwo from './QuestionTwo';
import './q1Style.css';

function QuestionOne() {
    let [optionOne, setOptionOneClicked] = useState(false);
    let [optionTwo, setOptionTwoClicked] = useState(false);

    function handleClickQ1() {
      setOptionOneClicked(true);
    }
      function handleClickQ2() {
        setOptionTwoClicked(true);

}
    return !optionOne && !optionTwo ? <> <div className="container">
    So, what size of dog do you want? The main factor here is if you can control it, 
            and the outdoor space you have. Don't get a huge dog in a tiny flat!
            <div className="buttons"><button onClick={handleClickQ1}>Give me a little dog!</button><button onClick={handleClickQ2}>I'd love a big dog</button>
            </div></div></> : optionOne ? <QuestionTwo/> : <QuestionTwo/>
}

export default QuestionOne;