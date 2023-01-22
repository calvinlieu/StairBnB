import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "50vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 37.037016, lng: -122.105153
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