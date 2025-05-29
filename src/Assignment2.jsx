import React from "react";

import App from "./App";

const languages = ['Python', 'Java', 'c', 'c++', 'JavaScript', 'C#',
    'Swift', 'Kotlin', 'Ruby', 'PHP'];

const database = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 
    'Oracle Database', 'MicrosoftSQL Server', 'Redis', 'Cassandra', 
    'Firebase RealTime Database', 'MariaDB'];

const framework = ['React', 'Angular', 'Vue', 'Django', 'Flask', 
    'Spring', 'Laravel', 'Ruby on Rails', 'Express', 'Next.js'];

const mergedArrays = [...languages, ...database, ...framework];

const mappedTechLists =  mergedArrays.map((item, index) => <p key={index}>{item}</p>);

const MyTechList = () => {
    return <div>{mappedTechLists}</div>
};

export default MyTechList;