import React from "react";

const confy = {
    confidence : {
        alert1: 'Endurance',
        alert2: 'Kingsley',
        alert3: 'Wisdom'
    },
    confyStyling: {
        backgroundColor: '#2fdb2c',
        color: 'red',
        border: '0px',
        marginBottom: '5%',
        width: '100%' 
    }
}

const clickSomething = (family) => alert(family);

export default function ObjectTesting () {
    return(
        <div>
            <button style={confy.confyStyling}
            onClick={()=>clickSomething(confy.confidence.alert1)}>
                Click Here
            </button>

            <button style={confy.confyStyling}
            onClick={()=> clickSomething(confy.confidence.alert2)}>
                Click Here
            </button>

            <button style={confy.confyStyling}
            onClick={()=>clickSomething(confy.confidence.alert3)}>
                Click Here
            </button>
        </div>
        
    )
}