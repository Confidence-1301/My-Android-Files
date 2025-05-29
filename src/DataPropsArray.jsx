import React from "react";

function Language(props){
    return ( 
        <>
            <span>{props.name}.
            <br></br>
            <br></br>
            {/* How many Languages re there?   
                  {' '+myArray.length} */}
                  </span>
        </>
    )
}
    let myArray = ['Python', 'Java', 'c', 'c++', 'JavaScript', 'C#',
        'Swift', 'Kotlin', 'Ruby', 'PHP'];
        
    let database = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 
            'Oracle Database', 'MicrosoftSQL Server', 'Redis', 'Cassandra', 
            'Firebase RealTime Database', 'MariaDB'];
        
    let framework = ['React', 'Angular', 'Vue', 'Django', 'Flask', 
            'Spring', 'Laravel', 'Ruby on Rails', 'Express', 'Next.js'];   

    export default function DataPropsArray(){
        return(
            <>
                <div style={{marginLeft: '100px', fontSize: '40px'}}> 
                These are programming Language: <Language name={myArray}/>
                </div>

                <div style={{marginLeft: '100px', fontSize: '40px'}}> 
                These are programming Database: <Language name={database}/>
                </div>

                <div style={{marginLeft: '100px', fontSize: '40px'}}> 
                These are programming Framework: <Language name={framework}/>
                </div>
            </>
        );
    }


