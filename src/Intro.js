import React, { useState, useEffect } from 'react';

function Intro() {
        let [clicked, setClicked] = useState(false);

              function handleClick() {
                setClicked(true);

        }
        return !clicked ? <>
                <h1>Ready to resuce your new best friend?</h1>
                        <h3>Pawsome!</h3>
                      It seems our generation loves dogs... a lot. However, many people don't realise how many great rescue dogs are available to adopt. 
                      Answer some questions to find your perfect pet!
                      <button onClick={handleClick}>Click to start</button>
                        </> : (      
        <>  So, what size of dog do you want? The main factor here is if you can control it, 
        and the outdoor space you have. Don't get a huge dog in a tiny flat!
        <button>Give me a little dog!</button><button>I'd love a big dog</button>
        </>
        )
}

export default Intro

