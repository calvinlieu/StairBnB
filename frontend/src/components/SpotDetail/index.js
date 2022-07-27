import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findASpot } from "../../store/spots";
import { spotDelete } from "../../store/spots";
import { spotEdit } from "../../store/spots";
import EditSpot from "../SpotEdit";
import "./spotDetail.css"

const SpotsDetail = () => {
  const history = useHistory();
  let { spotId } = useParams();
  spotId = Number(spotId);
  const dispatch = useDispatch();
  const spot = useSelector((state) => state.spots);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(findASpot(spotId));
  }, [dispatch, spotId]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(spotDelete(spotId));
    history.push("/")
  }

  const handleEditClick = (e) => {
    e.preventDefault();
    dispatch(spotEdit(spotId))
    history.push(`/spots/${spotId}/edit`)
  }

  return (
    <div >
      <h4 className="detailName">{spot.name}</h4>
      <img className="detailImg" src={spot.previewImage} alt={spot.name}></img>
      <h3 className="detailLocation">
        {spot.city}, {spot.state}
      </h3>
      <p className="detailDescription">{spot.description}</p>
      <p className="detailPrice">${spot.price} night</p>

      <div>
        <button onClick={handleDelete}>Delete Spot</button>
        <button onClick={handleEditClick}>Edit Spot</button>
      </div>
      
    </div>
  );
};

export default SpotsDetail;
