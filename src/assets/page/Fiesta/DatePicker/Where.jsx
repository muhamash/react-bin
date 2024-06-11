import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import "@maptiler/geocoding-control/style.css";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef, useState } from "react";

export function Where() {
  const apiKey = "YIfKfxlEousH33MgOlCt";

  const mapContainerRef = useRef(null);

  const [mapController, setMapController] = useState();

  useEffect(() => {
    if (!mapContainerRef.current) {
      return;
    }

    const map = new maplibregl.Map({
      style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
      container: mapContainerRef.current,
    });

    setMapController(createMapLibreGlMapController(map, maplibregl));
  }, []);

  return (
    <div>
      <GeocodingControl apiKey={apiKey} mapController={mapController} />

      <div
        ref={mapContainerRef}
        style={{ width: "280px", height: "240px", margin: "1px" }}
      />
    </div>
  );
}