/* eslint-disable react/prop-types */
import "@maptiler/geocoding-control/style.css";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";

export function Where({onChange}) {
  const apiKey = "YIfKfxlEousH33MgOlCt";
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [location, setLocation] = useState({ city: '', coords: [0, 0] });
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (mapContainerRef.current && !map) {
      const mapInstance = new maplibregl.Map({
        style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
        container: mapContainerRef.current,
        center: [0, 0], 
        zoom: 1,
      });

      const navControl = new maplibregl.NavigationControl();
      mapInstance.addControl(navControl, 'top-right');

      const markerInstance = new maplibregl.Marker({ draggable: true })
        .setLngLat([0, 0])
        .addTo(mapInstance);

      markerInstance.on('dragend', () => {
        const lngLat = markerInstance.getLngLat();
        fetchLocationDetails(lngLat);
      });

      
      setMap(mapInstance);
      setMarker(markerInstance);
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  const fetchLocationDetails = async ( lngLat ) =>
  {
    const response = await fetch(
      `https://api.maptiler.com/geocoding/${lngLat.lng},${lngLat.lat}.json?key=${apiKey}`
    );
    const data = await response.json();
    const city = data.features.length > 0 ? data.features[ 0 ].place_name : 'Unknown location';
    setLocation( { city, coords: [ lngLat.lng, lngLat.lat ] } );
    onChange( { city, coords: [ lngLat.lng, lngLat.lat ] });
  };

  console.log(location)

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      fetchSuggestions(e.target.value);
    } else {
      setSuggestions([]);
    }
  };

  const fetchSuggestions = async (query) => {
    const response = await fetch(
      `https://api.maptiler.com/geocoding/${query}.json?key=${apiKey}`
    );
    const data = await response.json();
    setSuggestions(data.features);
  };

  const handleSuggestionClick = (suggestion) => {
    const [lng, lat] = suggestion.geometry.coordinates;
    if (map && marker) {
      marker.setLngLat([lng, lat]);
      map.setCenter([lng, lat]);
      map.setZoom(14);
      fetchLocationDetails({ lng, lat });
    }
    setSearchQuery(suggestion.place_name);
    setSuggestions([]);
  };

  return (
    <div>
      <div className="relative">
        <div className="relative w-full">
          <input
            type="text"
            value={ searchQuery }
            onChange={ handleSearchChange }
            placeholder="Search for a place"
            className="w-full border-[1px] border-[#afb6be] text-sm p-1 rounded-[8px] pl-10"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.25 12.5C10.1495 12.5 12.5 10.1495 12.5 7.25C12.5 4.35051 10.1495 2 7.25 2C4.35051 2 2 4.35051 2 7.25C2 10.1495 4.35051 12.5 7.25 12.5Z" stroke="#212B36"
              strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.9624 10.9625L13.9999 14" stroke="#212B36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        { suggestions.length > 0 && (
          <div className="absolute z-10 bg-black/10  backdrop-blur-sm border-[1.2px] rounded-[8px] border-slate-300">
            <ul style={ { listStyleType: "none", padding: 0 } }>
            { suggestions.map( ( suggestion ) => (
              <li
                className="text-sm text-[#30363b]"
                key={ suggestion.id }
                onClick={ () => handleSuggestionClick( suggestion ) }
                style={ {
                  padding: "2px",
                  borderBottom: "1px solid #ccc",
                  cursor: "pointer",
                } }
              >
                { suggestion.place_name }
              </li>
            ) ) }
          </ul>
          </div>
        ) }
      </div>
      <div
        ref={ mapContainerRef }
        className="brightness-95"
        style={ { width: "100%", height: "200px", margin: "10px 0" } }
      />
    </div>
  );
}