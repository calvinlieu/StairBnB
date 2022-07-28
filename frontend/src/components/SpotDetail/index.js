import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findASpot } from "../../store/spots";
import { spotDelete } from "../../store/spots";
import * as reviewActions from "../../store/reviews";
import "./spotDetail.css";

const SpotsDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { spotId } = useParams();
  spotId = Number(spotId);
  const spot = useSelector((state) => state.spots[spotId]);
  const sessionUser = useSelector((state) => state.session.user);
  console.log(sessionUser, "sessionUser")
 

  useEffect(() => {
    if (!spot) {
      dispatch(findASpot(spotId));
    }
  }, [dispatch, spotId, spot]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(spotDelete(spotId));
    history.push("/");
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    history.push(`/spots/${spotId}/edit`);
  };

  return (
    spot && (
      <>
        <div>
          <h4 className="detailName">{spot.name}</h4>
          <img
            className="detailImg"
            src={spot.previewImage}
            alt={spot.name}
          ></img>
          <h3 className="detailLocation">
            {spot.city}, {spot.state}
          </h3>
          <p className="detailDescription">{spot.description}</p>
          <p className="detailPrice">${spot.price} night</p>

          {sessionUser &&
            sessionUser.user &&
            sessionUser.user.id === spot.ownerId && (
              <div>
                <button onClick={handleDelete}>Delete Spot</button>
                <button onClick={handleEditClick}>Edit Spot</button>
              </div>
            )}
        </div>
      </>
    )
  );
};

export default SpotsDetail;
