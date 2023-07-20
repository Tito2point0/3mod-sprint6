import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NasaPhoto from "./Components/Nasa.js"; 
  
 /*
const dummyData = {
  date: "2023-07-18",
  explanation: "What's happening in the night sky? To help find out, telescopes all over the globe will be pointing into deep space.  Investigations will include trying to understand the early universe, finding and tracking Earth-menacing asteroids, searching for planets that might contain extra-terrestrial life, and monitoring stars to help better understand our Sun. The featured composite includes foreground and background images taken in April from a mountaintop on La Palma island in the Canary Islands of Spain.  Pictured, several telescopes from the Roque de los Muchachos Observatory are shown in front of a dark night sky. Telescopes in the foreground include, left to right, Magic 1, Galileo, Magic 2, Gran Canarian, and LST. Sky highlights in the background include the central band of our Milky Way Galaxy, the constellations of Sagittarius, Ophiuchus and Scorpius, the red-glowing Eagle and Lagoon Nebulas, and the stars Alrami and Antares.  Due to observatories like this, humanity has understood more about our night sky in the past 100 years than ever before in all of human history.",
  hdurl: "https://apod.nasa.gov/apod/image/2307/MwLaPalma_Rosadzinski_2000.jpg",
  title:"Milky Way above La Palma Observatory"
}
*/

function App() {
  const [data, setData] = useState();
 
  useEffect(() => {
    // Fetch data from NASA API
    axios.get('https://api.nasa.gov/planetary/apod?api_key=qXXMOqy7lb814yIqwL6s54wY8ZgQRwmeIjKMwYha')
      .then(res => {
        // Set data to state
        setData(res.data);
      })
   .catch(err => console.log(err));    
  }, []);

  return (
    <div  className="App">
      <p>
       { data && <NasaPhoto photo={data} /> }
      </p>
    </div>
  );
} 

export default App;


/* 
date: "2023-07-18"
explanation: "What's happening in the night sky? To help find out, telescopes all over the globe will be pointing into deep space.  Investigations will include trying to understand the early universe, finding and tracking Earth-menacing asteroids, searching for planets that might contain extra-terrestrial life, and monitoring stars to help better understand our Sun. The featured composite includes foreground and background images taken in April from a mountaintop on La Palma island in the Canary Islands of Spain.  Pictured, several telescopes from the Roque de los Muchachos Observatory are shown in front of a dark night sky. Telescopes in the foreground include, left to right, Magic 1, Galileo, Magic 2, Gran Canarian, and LST. Sky highlights in the background include the central band of our Milky Way Galaxy, the constellations of Sagittarius, Ophiuchus and Scorpius, the red-glowing Eagle and Lagoon Nebulas, and the stars Alrami and Antares.  Due to observatories like this, humanity has understood more about our night sky in the past 100 years than ever before in all of human history."
hdurl: "https://apod.nasa.gov/apod/image/2307/MwLaPalma_Rosadzinski_2000.jpg"
title:"Milky Way above La Palma Observatory"
*/