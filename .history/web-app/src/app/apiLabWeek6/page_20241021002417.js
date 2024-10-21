"use client"

import { useState } from "react";

export default function DogPage() {

    const API_KEY = process.env.NEXT_PUBLIC_DOG_CEO_API_KEY;
    //const API_URL = `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=true&api_key=${process.env.NEXT_PUBLIC_DOG_CEO_API_KEY}`;
    const API_URL = `https://api.thedogapi.com/v1/images/search?limit=8&has_breeds=0`;


    const [ data, setData ] = useState(null);
    const [isLoading, setIsLoading] = useState(false);  // Loading state
    const [error, setError] = useState(null);  // Error state

    async function fetchData() {
        setIsLoading(true);
        try {
            const response = await fetch(API_URL, 
                // {
                //     headers: {
                //         'x-api-key': API_KEY,
                //     }
                // }
            );
            console.log('API Key:', API_KEY);
            if(!response.ok) {
                throw new Error ('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false); 
        }
    }

    const DisplayMedia = () => {
        if(data) {
            let mediaList = [];

            data.forEach((medium, index) => {
                let formattedMedia = medium.url ? (
                    <img src={medium.url} alt={medium.name} width="250" />
                ) : (
                    <div>Eck eck error with the Media</div> 
                );

                const breedInfo = medium.breeds && medium.breeds.length > 0 ? (
                    <div>
                        <h3>{medium.breeds[0].name}</h3>
                        <p>{medium.breeds[0].temperament}</p>
                        <p>{medium.breeds[0].origin || "Unknown"}</p>
                    </div>
                ) : (
                    <p>Breed information is not available 🥺</p>
                )

                mediaList.push(
                    <li key={index}>
                        {formattedMedia}
                        {breedInfo}
                    </li>
                )
            });

            return (
                <div>
                    <ul>
                        {mediaList}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    🪿 🐶
                </div>
            )
        }
    }

    return (
        <>
            <div>
                <header>
                    <h1>This is Monica's Sanbox for Doggos</h1>
                    <button onClick={fetchData}>
                        Fetch Doggos 🐶
                    </button>
                </header>

                {/* Handle loading and error states */}
                {isLoading && <p>Loading doggos...</p>}
                {error && <p>{error}</p>}

                <DisplayMedia/>
            </div>
        </>
    )
}

