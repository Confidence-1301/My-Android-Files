import React from "react";

function NIIT(props) {
  return (
      <>
        <h2>Students offer { props.sem1.subject1 } for 
        {" "+ props.sem2.subject1 }!</h2>
        
        <h2>Students offer {" "+ props.sem1.subject2 } for 
        {" "+ props.sem2.subject2 }!</h2>
        
        <h2>Students offer {" "+ props.sem1.subject3 } for 
        {" "+ props.sem2.subject3 }!</h2>
        
        <h2>Students offer {" "+ props.sem1.subject4 } for 
        {" "+ props.sem2.subject4 }!</h2>
      </>
      );
}
export default function PassObjectProps() {

    // This is the object properties definition
    const sem1SubjectsObject = 
    {
        subject1:"Android", subject2:"JSF", 
        subject3:"Hibernate", subject4:"Spring"
    };

    const sem1PriceListObject = 
    {
        subject1:"65,000", subject2:"89,000", 
        subject3:"82,000", subject4:"78,000"
    };

     return (
    <>
      <h1>What courses do you offer?</h1>
      <NIIT sem1={sem1SubjectsObject} sem2={sem1PriceListObject} />
    </>
  );
}

