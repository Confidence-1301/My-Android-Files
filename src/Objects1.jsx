import React from "react";

function Programming(props) {
    return(
        <>
            <h2>Programming Language {props.pro1.language1} and it's Framework{" "+ props.pro.framework1}.</h2>

            <h2>Programming Language {props.pro1.language2} and it's Framework{" "+ props.pro.framework2}.</h2>

            <h2>Programming Language {props.pro1.language3} and it's Framework{" "+ props.pro.framework3}.</h2>

            <h2>Programming Language {props.pro1.language4} and it's Framework{" "+ props.pro.framework4}.</h2>

            <h2>Programming Language {props.pro1.language5} and it's Framework{" "+ props.pro.framework5}.</h2>

            <h2>Programming Language {props.pro1.language6} and it's Framework{" "+ props.pro.framework6}.</h2>

            <h2>Programming Language {props.pro1.language7} and it's Framework{" "+ props.pro.framework7}.</h2>
        </>
    );
}

export default function PassProgrammingProps() {
    const proLanguagesObject = 
     {
        language1:"JavaScript", language2:"Python", language3:"Java" , 
        language4:"Ruby", language5:"PHP", language6:"Kotlin", 
        language7:"Swift"
    };

    const proFrameworksObject = 
    {
        framework1:"React",  framework2:"Django", framework3:"Jakarta EE",
        framework4:"Sinatra", framework5:"Laravel",   framework6:"Ktor", 
        framework7:"Vapor"
    };
    return(
        <>
            <h1>Programming Languages and it's Framework </h1>
            <Programming pro={proFrameworksObject} pro1={proLanguagesObject} />
        </>
    )
}