// // src/components/Map.js
// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// import { GoogleMap, LoadScript } from "@react-google-maps/api";

// const Map = () => {
//   const containerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const center = {
//     lat: 28.6141,
//     lng: 77.3588,
//   };

//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyBVy0pQZI8GNZ9fIih4MKOgg8OP-ZE96gI"
//       onLoad={() => console.log("Google Maps loaded successfully")}
//       onError={(error) => console.error("Error loading Google Maps:", error)}
//     >
//       ...
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
//         {/* Add map markers or other components here */}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState,useEffect } from "react";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 28.6141,
    lng: 77.3588,
  };
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not available in your browser");
    }
  }, []);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBVy0pQZI8GNZ9fIih4MKOgg8OP-ZE96gI"
      onLoad={() => console.log("Google Maps loaded successfully")}
      onError={(error) => console.error("Error loading Google Maps:", error)}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Add a marker for a specific location */}
        <Marker position={{ lat: latitude, lng: longitude}} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
