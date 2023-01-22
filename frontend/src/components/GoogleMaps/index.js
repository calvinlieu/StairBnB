import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = ({lng, lat}) => {
  
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: lat, lng: lng
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDehtGBFMYXjEU0mBRkTTba5NPDgdzXDqQ'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;