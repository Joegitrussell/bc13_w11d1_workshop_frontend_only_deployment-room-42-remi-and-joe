//import GetNorry from "./api";

import { useState, useEffect } from "react";
import "./App.css";

export function YourIn() {
  const [norris, setNorris] = useState("thingy");
  async function getNorris() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setNorris(data.value);
    console.log(data);
  }
  useEffect(() => {
    getNorris();
  }, []);
  console.log("norriy", norris);
  return (
    <body className ="body">
      
      <div className="chuck-norris">
      
        <p className = "quote">{norris}</p>
        <button className="random-button" onClick={getNorris}>
          Chucky Boy
        </button>
      </div>
    </body>
  );
}

export default YourIn;
