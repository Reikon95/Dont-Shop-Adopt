import React, { useState, useEffect } from 'react';
function QuestionTwo() {
    let [optionOne, setOptionOneClicked] = useState(false);
    let [optionTwo, setOptionTwoClicked] = useState(false);

    function handleClickQ1() {
      setOptionOneClicked(true);
    }
      function handleClickQ2() {
        setOptionTwoClicked(true);

}
    return !optionOne && !optionTwo ? <>
    Great, thanks for that information. How much exercise can you give the dog. 
      Take into account space availability, your commitments and your physical ability/fitness.
      <button onClick={handleClickQ1}>Not much</button> <button onClick={handleClickQ2}>One short walk a day</button> <button>Longer walks and runs</button>
    </> : optionOne ? 'Small dog, good choice' : 'Big dog, nice choice'
}

export default QuestionTwo;