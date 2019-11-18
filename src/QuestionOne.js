import React, { useState, useEffect } from 'react';

function QuestionOne() {
    let [clicked, setClicked] = useState(false);

    function handleClick() {
      setClicked(true);

}
    return <>
    So, what size of dog do you want? The main factor here is if you can control it, 
            and the outdoor space you have. Don't get a huge dog in a tiny flat!
            <button>Give me a little dog!</button><button>I'd love a big dog</button>
    </>
}

export default QuestionOne;