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
  const[data, setData] = useState(null);
  const[loading, setLoading] = useState(null);

  async function fetchData() {
    // fetch data 
  };

  const displayData = () => {
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
      <button className="border-solid">Fetch stuff</button>
    </header>
  }


  return (
    <div className="m-8">
      <Header />

    </div>
  );
}
