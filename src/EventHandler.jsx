import React from "react";

export default function EventHandler(){

    function handleButtonEvent(){
        alert(`Samuel, the late comer`)
    }
    // const e = 'joel';

    return (
        <div className="App">
            
            {/* Event Handling with Pitfall */}
            {/* <button onClick={alert(`Samuel, the late comer`)}>
                CLICK ME WITH PITFALL
            </button> */}

            <br></br>
            <br></br>
            {/* Solution1 */}
            <button onClick={({e = 'Claude'}) => alert(`${e}, the late comer`)}>
                CLICK ME WITH SOLUTION 1
            </button>
            
            <br></br>
            <br></br>
            {/* Solution2 */}
            {/* <button onClick={handleButtonEvent()}>
                CLICK ME WITH SOLUTION 2
            </button> */}
            <button onClick={handleButtonEvent}>
                CLICK ME WITH SOLUTION 2
            </button>
            

             <br></br>
             <br></br>
            {/* Solution3 */}
            <button onClick={function handleButtonEvent({e = 'Christ'}){
                alert(`${e}, Life and Samuel`)
            }}>
                CLICK ME WITH SOLUTION 3
            </button>
            

        </div>
    );
}