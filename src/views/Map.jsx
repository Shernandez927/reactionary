import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../index.css";
import "../../node_modules/leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div className="h-40 w-40 p-8 bg-antique-violet/75 rounded-lg shadow-xl">
      <h2 className="text-center">Map</h2>
      <MapContainer
        id="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
