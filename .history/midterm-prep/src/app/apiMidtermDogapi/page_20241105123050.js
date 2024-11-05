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
    const API_KEY = process.env.NEXT_PUBLIC_DOG_CEO_API_KEY;

    const [dogData, setDogData] = useState(null);
    const [loading, setLoading] = useState(null);

    async function fetchDogData() {
        setLoading(true);
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?limit=8&has_breeds=1&api_key=${API_KEY}`);

        const data = await response.json();

        setDogData(data);
        setLoading(false);
    };

    const DisplayDogData = () => {
        let formattedData = JSON.stringify(dogData);
        if(loading) return <div>Loading</div>

        if(dogData) {
            const dataThatIsFormattedorDisplay = [];
            dogData.forEach((entry, i) => {
                dataThatIsFormattedorDisplay.push(
                    <article
                        key={1}>
                            <img src={entry.url} />
                            <h3>{entry.name}</h3>
                            <div>
                            {entry.breeds && entry.breeds.length > 0 ? (
                                <div>
                                    <h3>{entry.breeds[0].name}</h3>
                                    <p><strong>Temperament</strong>: {entry.breeds[0].temperament}</p>
                                    <p><strong>Origin</strong>: {entry.breeds[0].origin || "Unknown"}</p>
                                </div>
                                ) : (
                                    <p>Breed information is not available 🥺</p>
                            )}
                            </div>
                    </article>
                )
            })
            return <section>{dataThatIsFormattedorDisplay}</section>
        }
        return <div>Empty, no data fetched</div>
    };

    const Header = () => {
        return (
            <>
                This is Monica's Midterm API for Doggos 
                <br />
                <button
                    disabled={loading}
                    className="border-solid border-2"
                    onClick={fetchDogData}>
                        Hello
                </button>
            </>
        )
    }

    return (
        <>
            <div className="m-8">
                <Header />
                <DisplayDogData />
            </div>
        </>
    )
}