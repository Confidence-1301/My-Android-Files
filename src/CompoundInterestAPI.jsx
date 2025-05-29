import React from "react";

const person = {
    name: 'Gregorio Y. Zara',
    theme1: {
        backgroundColor: 'black',
        color: 'pink',
        height:'100vh'
    },
    theme2: {
        height:'100px', 
        width: '100px',
        borderRadius:'50px'
    },
    imgStyle:{
      display:'flex',
        justifyContent:'center'
    },
    listStyle:{
      textAlign:"center",
      listStyle:"none"
    }   
  };
  
  export default function CompoundInterestAPI() {
    return (
      <div style={person.theme1}>
        <div style={person.imgStyle}>
          <h1>{person.name}'s Todos</h1>
        </div>

        <div style={person.imgStyle}>
          <img style={person.theme2}
            src="me.jpg"
            alt="Gregorio Y. Zara"
          />
        </div>
        
        <div style={person.imgStyle}>
            <ul>
              <li style={person.listStyle}>Improve the videophone</li>
              <li style={person.listStyle}>Prepare aeronautics lectures</li>
              <li style={person.listStyle}>Work on the alcohol-fuelled engine</li>
            </ul>
          </div>
      </div>
    );
  }
  