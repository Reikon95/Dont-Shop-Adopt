import React from 'react';

function Explanation(props) {
        return (
        <>
        <h1>You should consider a {props.breed}!</h1>
        <>{(props.size < 5) ? <p>It's a smaller dog</p> : <p>It's a larger dog</p>}</>
        <>{(props.activityLevel < 5) ? <p>a {props.breed} doesn't require too much exercise</p> : <p>{props.breed} is great to exercise alongside!</p>}</>
        </>
        )
    
}

export default Explanation
