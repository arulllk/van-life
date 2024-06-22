import React from "react";
import ReactDOM from "react-dom/client";
import {  Link, useSearchParams } from "react-router-dom";

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" }
]

export default function SearchParams() {
    const [searchParams,setSearchParams] = useSearchParams();
    const searchWord = searchParams.get("type");
    const newChar = searchWord 
        ? swCharacters.filter(char => char.type.toLowerCase() === searchWord )
        : swCharacters
    // const charEls = swCharacters
    //   .map(char => (
    //     <div key={char.name}>
    //       <h3
    //         style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
    //       >
    //         Name: {char.name}
    //       </h3>
    //       <p>Type: {char.type}</p>
    //       <hr />
    //     </div>
    //   ))

     const charEls = newChar
      .map(char => (
        <div key={char.name}>
          <h3
            style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
          >
            Name: {char.name}
          </h3>
          <p>Type: {char.type}</p>
          <hr />
        </div>
      ))

      function generateNewParamString(key,value) {
        const sp =  new URLSearchParams(searchParams);
        if(value=== null) {
          sp.delete(key)
        }else {
          sp.set(key,value)
        }
        return `?${sp.toString()}`;
      }
    
  return (
    <main>
      <h2>Home</h2>
      <div>
        {/* <Link to="?type=jedi">Jedi</Link>
        <Link to="?type=sith">sith</Link>
        <Link to=".">clear</Link> */}

         <Link to={generateNewParamString('type','jedi')}>Jedi</Link>
        <Link to={generateNewParamString('type','sith')}>sith</Link>
        <Link to={generateNewParamString('type',null)}>clear</Link>

      </div>
      {charEls}
    </main>
  );
}


 