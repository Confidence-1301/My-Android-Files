import React from "react";

const proLanguageObject = 
    {
        language1:"JavaScript", language2:"Python", language3:"Java" , 
        language4:"Ruby", language5:"PHP", language6:"Kotlin", 
        language7:"Swift",
        
    };

const proFrameworkObject = 
    {
        framework1:"React",  framework2:"Django", framework3:"Jakarta EE",
        framework4:"Sinatra", framework5:"Laravel",   framework6:"Ktor", 
        framework7:"Vapor"
    };

    const PasseProgrammingProps = ({framework, language}) => 
    {
        return(
            <div className="p-4">
                <h1 className="text-2xl mb-4">Which Programming Languages and Frameworks are you familiar with?</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl mb-2">Languages:</h2>
                        <ul className="list-disc pl-5">
                            {Object.values(language).map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl mb-2">Frameworks:</h2>
                        <ul className="list-disc pl-5">
                            {Object.values(framework).map((framework, index) => (
                                <li key={index}>{framework}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

    export default function BMI(){
        return(
            <div className="p-8">
                <PasseProgrammingProps framework={proFrameworkObject} language={proLanguageObject} />
            </div>
        )
    }