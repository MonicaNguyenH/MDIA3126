"use client"

import { useState } from "react";

export default function DogPage() {

    const API_KEY = process.env.NEXT_PUBLIC_DOG_CEO_API_KEY;
    const API_URL = `/api.thedogapi.com/v1/images/search?limit=10?api_key=${process.env.NEXT_PUBLIC_DOG_CEO_API_KEY}`;

    const [ data, setData ] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch(API_URL);
            if(!response.ok) {
                throw new Error ('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        }
    }

    const DisplayMedia = () => {
        if(data) {
            let mediaList = [];

            data.forEach((medium, index) => {
                let formattedMedia = medium.media_type === 'image' ? (
                    <img src={medium.url} alt={medium.title} width="250" />
                ) : (
                    <video controls width="250">
                        <source src={medium.url} type="video/webm" />
                        Eck eck error with the Media
                    </video>
                );

                mediaList.push(
                    <li key={index}>
                        <h2>{medium.name}</h2>
                        {formattedMedia}
                        <h5>{medium.origin}</h5>
                        <p>{medium.temperament}</p>
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
                <DisplayMedia/>
            </div>
        </>
    )
}