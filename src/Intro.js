import React, { useState, useEffect } from 'react';
import QuestionOne from './QuestionOne';
import './intro.css';


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
                      <div className="start"><button onClick={handleClick}>Click to start</button></div>
                        </> : (      
        <QuestionOne/>
        )
}

export default Intro

