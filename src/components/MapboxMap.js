import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hbmFzaWsiLCJhIjoiY20xMGlycGxwMGpieDJrcjNncWo0dmU2byJ9.yTEwzHFyc28FJVg8Y8r_Ng';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [coordinates] = useState({ longitude:  16.758472456710468,  latitude:   51.03195672165407 }); // Zastąp swoimi współrzędnymi

  useEffect(() => {
    if (map.current) return; // initialize map only once
  
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinates.longitude, coordinates.latitude], // Ustawienie centrum mapy
      zoom: 12,
    });
  
    new mapboxgl.Marker()
      .setLngLat([coordinates.longitude, coordinates.latitude])
      .addTo(map.current);
  
  }, [coordinates]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
  
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinates.longitude, coordinates.latitude], // Ustawienie centrum mapy
      zoom: 12,
    });
  
    new mapboxgl.Marker()
      .setLngLat([coordinates.longitude, coordinates.latitude])
      .addTo(map.current);
  
    new mapboxgl.Popup()
      .setLngLat([coordinates.longitude, coordinates.latitude])
      .setHTML('<h3>Moja Lokalizacja</h3><p>Adres: Ulica Przykładowa 123, Miasto</p>') // Twoje informacje
      .addTo(map.current);
  }, [coordinates]);

  return (
    <div>
      <div ref={mapContainer} style={{ height: '300px', width: '100%' }}></div>
      <a 
        href={`https://www.google.com/maps/dir/?api=1&destination=${coordinates.latitude},${coordinates.longitude}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block mt-4 bg-yellow-500 text-white text-center text-lg px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
      >
        Uzyskaj wskazówki
      </a>
    </div>
  );
}

export default Map;



