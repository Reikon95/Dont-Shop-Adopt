import React from 'react';

function Explanation(props) {
        return (
        <>
        <h1>You should consider a {props.breed}!</h1>
        <>{(props.size < 5) ? <p>It's a smaller dog</p> : <p>It's a larger dog</p>}</>
        <>{(props.activityLevel < 5) ? <p>a {props.breed} doesn't require too much exercise</p> : 
                <p>{props.breed}s are great to exercise alongside!</p>}</>
        <>{props.officeDog ? <p>You can take the {props.breed} into work with you and shouldn't have issues</p> :
                <p>It probably isn't a good idea to take your {props.breed} to work on a regular basis</p>}</>
        <>{props.health ? <p>The {props.breed} is typically a healthy dog, so you needn't worry about the ethics or vet bills</p> :
                <p>You should consider that {props.breed} does have some health issues. Maybe you could consider a crossbreed?</p>}</>
                <>There's lots of great charities and shelters in the UK that can help you out with finding a {props.breed}. Here are some of them:</>

        </>
        )
    
}

export default Explanation
