import React from "react";

const myArray = ['Python','Java','c','c++','JavaScript','C#','Go(Golang)','Swift','Kotlin','Ruby','PHP','Rust','TypeScript','Dart','Scala','R','Objective-C','Haskell','Perl','Lua'];

const myLanguages = myArray.map((lang) => <p>(lang)</p>);

const MyLanguage = () =>{
    return myLanguages;
}

export default MyLanguage;