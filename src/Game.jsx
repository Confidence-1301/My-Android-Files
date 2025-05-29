import React from "react";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const dashboardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'Center',
    // height: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    fontSize: '18px',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    border: '2px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
}

const rowStyle ={
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
    gap: '10px'
}

const squareStyle = {
    width: '60px',
    height: '60px',
    fontSize: '24px',
    margin: '5px',
    color: 'red',
    backgroundColor: 'pink',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

}

function Game_v1() {
    const [arrHistory, setArrHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState (0);
    const isXNext = currentMove % 2 == 0;
    const arrLine = arrHistory[currentMove];
    // const [arrLine, setarryLine] = useState([]);// its a memory to stor what its been passed to the array
     
    const handleClick = (i) => {
        if(calculateWinner(arrLine) || arrLine[i]){
            return;
    }

        // Example action, replace with ur logic.
        arrLine[i] = isXNext ? "X" : "O"; 
        const nextArrHistory = [...arrHistory.slice(0,currentMove + 1),arrLine] ;
        setArrHistory(nextArrHistory);
        setCurrentMove(nextArrHistory.length - 1);

        //setArrLine(arrLine);

        console.log(currentMove);
        console.log(nextArrHistory);
        console.log(nextArrHistory.length);
}
   
    return(
        <div style={dashboardStyle}>
            <div style={rowStyle}>
            <button onClick={() => handleClick(0)} style={squareStyle}>{arrLine[0]}</button>
            <button onClick={() => handleClick(1)} style={squareStyle}>{arrLine[1]}</button>
            <button onClick={() => handleClick(2)} style={squareStyle}>{arrLine[2]}</button>
            </div>
            <div style={rowStyle}>
            <button onClick={() => handleClick(3)} style={squareStyle}>{arrLine[3]}</button>
            <button onClick={() => handleClick(4)} style={squareStyle}>{arrLine[4]}</button>
            <button onClick={() => handleClick(5)} style={squareStyle}>{arrLine[5]}</button>
            </div>
            <div style={rowStyle}>
            <button onClick={() => handleClick(6)} style={squareStyle}>{arrLine[6]}</button>
            <button onClick={() => handleClick(7)} style={squareStyle}>{arrLine[7]}</button>
            <button onClick={() => handleClick(8)} style={squareStyle}>{arrLine[8]}</button>
            </div>

        </div>
    )
}

    function calculateWinner(squaaares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

        //this is a multidimensional arrary
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squaaares[a] && squaaares[a] === squaaares[b] && squaaares[a] === squaaares[c]) {
            return squaaares[a];
        }
  }
  return null;
}
export default Game_v1