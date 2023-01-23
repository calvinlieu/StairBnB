import React from "react";
import {
  GoogleMap,
  LoadScript,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";

const MapContainer = ({ lng, lat }) => {
  // const APIKey = useSelector(state => state.map.APIKey)
  // console.log(APIKey, "API")

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: +lat,
    lng: +lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDehtGBFMYXjEU0mBRkTTba5NPDgdzXDqQ">
      <div>Where You'll Be</div>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
