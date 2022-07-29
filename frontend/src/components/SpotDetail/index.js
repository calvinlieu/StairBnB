import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findASpot } from "../../store/spots";
import { spotDelete } from "../../store/spots";
import { deleteReview, loadReviews, createReviews } from "../../store/reviews";

import "./spotDetail.css";

const SpotsDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { spotId } = useParams();
  spotId = Number(spotId);
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const spot = useSelector((state) => state.spots[spotId]);
  const sessionUser = useSelector((state) => state.session.user);
  const review = useSelector((state) => Object.values(state.reviews));
  const userReview = review.filter(
    (review) => review.userId === sessionUser.user.id
  );

  useEffect(() => {
    if (!spot) {
      dispatch(findASpot(spotId));
    }
  }, [dispatch, spotId, spot]);

  useEffect(() => {
    dispatch(loadReviews(spotId)).then(() => setIsLoaded(true));
  }, [dispatch]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(spotDelete(spotId));
    history.push("/");
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    history.push(`/spots/${spotId}/edit`);
  };

  const handleCreateReview = (e) => {
    e.preventDefault();
    dispatch(createReviews(spotId, review));
    history.push(`/spots/${spotId}/createReview`);
  };

  // const handleDeleteReview = (e) => {
  //   e.preventDefault();
  //   dispatch(deleteReview(id));
  //   history.push(`/spots/${spotId}`);
  // };

  const reviews = spot.Reviews;
  let allStars = 0;
  reviews.map(review => {
    allStars += review.stars
  })
  
  const avgStarRating = allStars / reviews.length;

  return (
    spot && (
      <>
        <div>
          <div className="detailName">{spot.name} </div>
          <img
            className="detailImg"
            src={spot.previewImage}
            alt={spot.name}
          ></img>
          <h3 className="detailLocation">
            {spot.city}, {spot.state}
          </h3>
          <p className="avgStarRating">
            Average Star Rating: {avgStarRating}
          </p>
          <p className="detailDescription">Description: {spot.description}</p>
          <p className="detailPrice">Price: ${spot.price} night</p>
          {sessionUser &&
            sessionUser.user &&
            sessionUser.user.id === spot.ownerId && (
              <div>
                <button onClick={handleEditClick}>Edit Spot</button>
                <button onClick={handleDelete}>Delete Spot</button>
              </div>
            )}
        </div>
        <div>
          {!userReview.length && (
            <button onClick={handleCreateReview}>Create Review</button>
          )}
        </div>
        <div className="spotsReviews">
          {review.map((review) => (
            <div key={review.id}>
              <div className="eachReview">
                <h3 className="reviewName">Reviews: {review.review}</h3>
                <div className="reviewStars">Stars: {review.stars}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  );
};

export default SpotsDetail;
