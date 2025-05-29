import React from "react";


// creating a component
function AboutFootballTeams(props){
    return(
        <div>
            <ul>
                <li>
                    Player{' '+props.player.player2+' '} 
                    has Jersey {props.jersey.Jersy2}
                </li>
            </ul>
        </div>
    );
}

export default function ObjectProperties(){
const arsenal = 
{
    player1:"Fegurson", 
    player2:"Christian", 
    player3:"Samuel", 
    player4:"Joel",
    player5:"Omiete" 
};

const madrid = 
{
    player1:"Destiny", 
    player2:"Aziz", 
    player3:"Life", 
    player4:"Tayo",
    player5:"Claude" 
};

const playerNumbers = 
{
    Jersy1:"Num 001", 
    Jersy2:"Num 002", 
    Jersy3:"Num 003", 
    Jersy4:"Num 004",
    Jersy5:"Num 005" 
};

    return(
        <>
            <AboutFootballTeams player = {arsenal} 
            jersey = {playerNumbers} />
            <br/>
            <AboutFootballTeams player = {madrid} 
            jersey = {playerNumbers} />
            <br/>
        </>
    );
}