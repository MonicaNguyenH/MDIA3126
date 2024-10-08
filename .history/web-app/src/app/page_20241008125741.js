"use client"

import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function Home() {

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  return (
    <APIProvider apiKey={API_KEY}>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={10}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
    </APIProvider>
  );
}