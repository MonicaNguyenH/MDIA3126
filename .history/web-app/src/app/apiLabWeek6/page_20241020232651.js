"use client"

import { useState } from "react";

export default function DogPage() {

    const API_KEY = process.env.NEXT_PUBLIC_DOG_CEO_API_KEY;
    const [ data, setData ] = useState(null);

    async function fetchData() {
        const response = await fetch(API_KEY);
        const data = await response.json();
        setData(data);
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
            })
        }
    }

    return (
        <>
        </>
    )
}