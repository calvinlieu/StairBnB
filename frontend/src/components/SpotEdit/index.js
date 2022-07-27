import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as spotActions from "../../store/spots";

const EditSpot = () => {
  const dispatch = useDispatch();
  let { spotId } = useParams();
  spotId = Number(spotId);
  const spot = useSelector((state) => state.spots);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmit, setHasSubmit] = useState(false);

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateLat = (e) => setLat(e.target.value);
  const updateLng = (e) => setLng(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updatePreviewImage = (e) => setPreviewImage(e.target.value);

  if (hasSubmit) {
    return <Redirect to={`/spots/${spotId}`} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    let data = {
      address: address,
      city: city,
      state: state,
      country: country,
      previewImage: previewImage,
      lat: lat,
      lng: lng,
      name: name,
      description: description,
      price: price,
    };

    return dispatch(spotActions.spotEdit(data, spot.id))
    .then(async (res) => {
      console.log("success");
      setHasSubmit(true);
    })
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        {/* Name */}
        <input
          type="text"
          placeholder="Spot name"
          value={name}
          onChange={updateName}
        />
      </label>
      <label>
        {/* Address*/}
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={updateAddress}
        />
      </label>
      <label>
        {/* City */}
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={updateCity}
        />
      </label>
      <label>
        {/* State */}
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={updateState}
        />
      </label>
      <label>
        {/* Country */}
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={updateCountry}
        />
      </label>
      <label>
        {/* Lat */}
        <input
          type="text"
          placeholder="Latitude"
          value={lat}
          onChange={updateLat}
        />
      </label>
      <label>
        {/* Lng */}
        <input
          type="text"
          placeholder="Longitude"
          value={lng}
          onChange={updateLng}
        />
      </label>
      <label>
        {/* Description */}
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={updateDescription}
        />
      </label>
      <label>
        {/* Price */}
        <input
          type="text"
          value={price}
          placeholder="Price"
          onChange={updatePrice}
        />
        <label>
          {/* Image */}
          <input
            type="text"
            placeholder="img-url"
            value={previewImage}
            onChange={updatePreviewImage}
          />
        </label>
      </label>
      <button type="submit">Edit Spot</button>
    </form>
  );
};

export default EditSpot;
