// src/pages/Map.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { zones } from "../data/zones";
import "leaflet/dist/leaflet.css";

const riskColors = {
  Low: "green",
  Medium: "yellow",
  High: "red",
  Gold: "gold",
};

const Map = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      {/* Floating Stats */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[998] flex gap-8 bg-black/70 backdrop-blur-md rounded-xl px-6 py-2 text-white shadow-lg">
        <div>Total Zones: {zones.length}</div>
        <div>High Risk: {zones.filter((z) => z.risk === "High").length}</div>
        <div>Active Projects: 23</div>
      </div>

      <MapContainer
        center={[20, 80]}
        zoom={3}
        className="w-full h-full z-0"
        scrollWheelZoom={true}
      >
        {/* Dark Tiles */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {zones.map((zone) => (
          <React.Fragment key={zone.id}>
            {/* Risk Circle */}
            <Circle
              center={[zone.lat, zone.lng]}
              radius={50000} // adjust size
              pathOptions={{
                color: riskColors[zone.risk], // circle border
                fillColor: riskColors[zone.risk], // fill matches risk/priority
                fillOpacity: 0.4, // adjust transparency
                weight: 2,
              }}
            >
              <Popup>
                <div className="text-sm font-semibold">
                  <div>{zone.name}</div>
                  <div>
                    Risk: {zone.risk} ({zone.riskPercent}%)
                  </div>
                  <div>Priority: {zone.priority}</div>
                  <div>CO₂: {zone.co2}</div>
                  <div>Species Protected: {zone.species}</div>
                  <div>Coastal Communities: {zone.communities}</div>
                  <div>Status: {zone.status}</div>
                  {/* Navigate to ZoneDetail */}
                  <button
                    onClick={() => navigate(`/zone/${zone.id}`)}
                    className="mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </Popup>
            </Circle>

            {/* Optional marker if you want the blue marker too */}
            <Marker position={[zone.lat, zone.lng]}>
              <Popup className="custom-popup">
                <div className="text-sm font-semibold">
                  <div>{zone.name}</div>
                  <div>
                    Risk: {zone.risk} ({zone.riskPercent}%)
                  </div>
                  <div>Priority: {zone.priority}</div>
                  <div>CO₂: {zone.co2}</div>
                  <div>Species Protected: {zone.species}</div>
                  <div>Coastal Communities: {zone.communities}</div>
                  <div>Status: {zone.status}</div>
                  <button
                    onClick={() => navigate(`/zone/${zone.id}`)}
                    className="mt-2 w-full bg-blue-800 hover:bg-blue-700 text-white px-2 py-1 rounded-md text-sm font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </Popup>
            </Marker>
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
