import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer , Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function GetIcon(_iconSize, forecast) {
  return L.icon({
    iconUrl: require("../Static/Icons/" + forecast + ".png"),
    iconSize: [_iconSize],
  });
}

function MyMap() {
  const position = [25.5, 85.13];

  const locations = [
    { name: "west", position: [25.5357, 84.85], size: 40, forecast: "location-2955" }
  ];
  return (
    <MapContainer className="map" center={position}
    zoom={10}
   
  >
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {locations.map((location) => (
      <Marker
        position={location.position}
        icon={GetIcon(location.size, location.forecast)}
      >
        <Popup>
           My Current Location
        </Popup>
      </Marker>
    ))}
    </MapContainer>
  );
}

export default MyMap;