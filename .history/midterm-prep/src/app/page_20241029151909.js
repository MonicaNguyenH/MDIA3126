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
    // waiting for other service to send back the data (getting result somewhere else)

    setLoading(true);
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15")

    const data = await response.json();

    setAstronomyData(data);
    setLoading(false);
  };

  const DisplayAstronomyData = () => {
    // display if we have data
    // loading state (maybe data?)
    // fulfilled state (data exists)
    // empty state (!data)
    
    let formattedData = JSON.stringify(astronomyData);
    if(loading) return <div>Loading</div>

    if(astronomyData) {
      const dataThatIsFormattedorDisplay = [];
      astronomyData.forEach((entry, i) => {
        dataThatIsFormattedorDisplay.push(
        <article 
          key={1}>
            <img src={entry.url} />
            <h3>{entry.title}</h3>
            <p>{entry.explanation}</p>
        </article>)
      })
      return <section>{dataThatIsFormattedorDisplay}</section>
    }
    return <div>Empty, no data fetched</div>
  };

  const Header = () => {
    // build the UI that grabs data 
    return<header>
      Welcome to my midterm prep
      <br />
      <button 
        disabled={loading}
        className="border-solid border-2" 
        onClick={fetchAstronomyData}>
          {loading ? "fetching"}
      </button>
    </header>
  }


  return (
    <div className="m-8">
      <Header />
      <DisplayAstronomyData />
    </div>
  );
}
