import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllSpots } from "../../store/spots";
import { loadAllReviewsThunk } from "../../store/reviews";
import "./spots.css";

const SpotsPage = () => {
  const dispatch = useDispatch();
  const spots = useSelector((state) => Object.values(state?.spots));
  const reviews = useSelector((state) => Object.values(state.reviews));
  const sessionUser = useSelector((state) => state.session.user);

  const spotsString = JSON.stringify(spots);
  const reviewsString = JSON.stringify(reviews);

  useEffect(() => {
    getAllSpots(dispatch);
  }, [dispatch, spotsString, sessionUser]);

  useEffect(() => {
    dispatch(loadAllReviewsThunk());
  }, [dispatch, reviewsString, sessionUser]);

  //define a function that is going to receive a spotid and should return a star rating for that spot

  const starSpot = (spotId) => {
    const allReviewsForThisSpot = reviews.filter((review) => {
      return review.spotId === spotId;
    });
    let allStars = 0;
    allReviewsForThisSpot.forEach((review) => {
      allStars += review.stars;
    });
    const avgStarRating = allStars / allReviewsForThisSpot.length;
    return (avgStarRating ? avgStarRating.toFixed(2) : "New")
  };

  return (
    <div className="spotsPage">
      <div className="eachSpot">
        {spots &&
          spots.map((spot) => (
            <div className="spotLink" key={spot.id}>
              <NavLink to={`/spots/${spot.id}`}>
                <div className="room">
                  <div className="imgDiv">
                  <img
                    className="spotImg"
                    src={spot.previewImage}
                    alt={spot.name}
                  ></img>
                  </div>
                  <div className="roomDetails">
                    <div className="roomData">
                    <h3 className="spotName">{spot.name}</h3>
                    <h4 className="spotLocation"> {spot.city}, {spot.state} </h4>
                    <div className="spotDistance">{`${(Math.floor(Math.random() * (100) + 200)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } miles away`}</div>
                    {/* <p className="spotDetails">{spot.description}</p> */}
                    <p className="spotPrice"> ${spot.price} night</p>

                    <div className="spotStars">
                      <div className="star">
                      <i className="fa-solid fa-star star-design"></i>
                      </div>
                      {starSpot(spot.id)}
                    </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SpotsPage;
