"use client"
import { useState } from "react";

// TODO
// - add button 
// - function to fetch data 
// - fuction to add data to state
// - make it responsive
// - display data 
// - function to clear data
// - component for empty state
// = component for data state
// - error handling if the data doesnt come back

export default function Home() {
  // if usestate is not null, probally fetching or loading data, or have data 
  // if usestate = data, we can display our data
  const[astronomyData, setAstronomyData] = useState(null);
  const[loading, setLoading] = useState(null);

  async function fetchAstronomyData() {
    // fetch data 

    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
  };

  const DisplayAstronomyData = () => {
    // display if we have data
    // loading state (maybe data?)
    // fulfilled state (data exists)
    // empty state (!data)
  };

  const Header = () => {
    // build the UI that grabs data 
    return<header>
      Welcome to my midterm prep
      <br />
      <button className="border-solid border-2">Fetch stuff</button>
    </header>
  }


  return (
    <div className="m-8">
      <Header />
      <DisplayAstronomyData />
    </div>
  );
}
