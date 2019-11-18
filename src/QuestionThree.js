import React, { useState, useEffect } from 'react';


function QuestionThree() {
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
    </> : optionOne ? 'yes' : 'no';
}

export default QuestionThree;