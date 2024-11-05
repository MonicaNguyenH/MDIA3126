"use client";
import { useState } from "react";
import styles from './index.css'

export default function Home() {

    const API_KEY = "live_dhv73gUzIeytoVMqECWq8K06x39rLJkFITrXks5QuZjogNhPzqpKPgsOLcoqG1Lp";
    // const API_KEY = process.env.NEXT_PUBLIC_DOG_CEO_API_KEY; // Ensure this environment variable is correctly set
    const API_URL = 'https://api.thedogapi.com/v1/images/search?limit=8&has_breeds=1';

    const [dogData, setDogData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchDogData() {
        setLoading(true);
        setError(null); // Reset error state before fetching

        try {
            const response = await fetch(API_URL, {
                headers: {
                    'x-api-key': API_KEY,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setDogData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const DisplayDogData = () => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
        if (!dogData) return <div>No data fetched 🪿 🐶</div>;

        return (
            <section>
                {dogData.map((entry, index) => (
                    <article key={index}>
                        <img src={entry.url} alt={entry.name} width="300" />
                        {entry.breeds && entry.breeds.length > 0 ? (
                            <div>
                                <h2>{entry.breeds[0].name}</h2>
                                <p><strong>Temperament</strong>: {entry.breeds[0].temperament}</p>
                                <p><strong>Origin</strong>: {entry.breeds[0].origin}</p>
                                <p><strong>Life Span</strong>: {entry.breeds[0].life_span} years</p>
                            </div>
                        ) : (
                            <p>Breed information is not available 🥺</p>
                        )}
                    </article>
                ))}
            </section>
        );
    };

    const Header = () => (
        <>
            <h1>This is Monica's Midterm API for Doggos</h1>
            <button
                disabled={loading}
                className="button-fetch"
                onClick={fetchDogData}
            >
                Fetch Doggos 🐶
            </button>
        </>
    );

    return (
        <div className="m-8">
            <Header />
            <DisplayDogData />
        </div>
    );
}
