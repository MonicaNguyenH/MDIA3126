"use client"

import {APIProvider, Map, Marker, useMarkerRef} from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

export default function Home() {

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [markerRef, marker] = useMarkerRef();
  
  async function fetchData() {
    //when we running this fnction, when it hits await, will wait until whatever need to be done first
    const response = await fetch(DATA_URL);

    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    if(!marker){
      return;
    }
  }, [marker]);
  
  return (
    <APIProvider apiKey={API_KEY}>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 49.25453632371906 , lng: -123.00077198894071}} 
      defaultZoom={17}
      //disableDefaultUI={false}
    >
      <Marker ref={markerRef} position={{lat: 49.25453632371906 , lng: -123.00077198894071}} />
    </Map>
    </APIProvider>
  );
}