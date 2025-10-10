import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./map.scss";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapStyles = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [{ saturation: -50 }, { lightness: 0 }],
  },
];

const center = {
  lat: 43.248275,
  lng: 76.865542,
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    language: "en",
  });
  console.log("Google Maps API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  if (!isLoaded) return <div>Loading map…</div>;

  return (
    <section className="map " id="map">
      <div className="map__container container">
        <div className="map__overlay"></div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{ styles: mapStyles, streetViewControl: false }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </section>
  );
};

export default Map;
