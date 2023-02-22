import React from "react";
import {
  StaticGoogleMap,
  Marker,
  LoadScript
} from 'react-static-google-map';
import { useSelector } from "react-redux";

const MapContainer = ({ lng, lat }) => {


  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: +lat,
    lng: +lng,
  };

  let locationStr = `${lat}, ${lng}`

    return (
        <div>
            <StaticGoogleMap size="800x400" apiKey="AIzaSyDehtGBFMYXjEU0mBRkTTba5NPDgdzXDqQ">
                <Marker location={locationStr} color="red" />
            </StaticGoogleMap>
        </div>

    )
};

export default MapContainer;
