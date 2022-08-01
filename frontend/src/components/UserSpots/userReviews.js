import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUserReviews, loadReviews } from "../../store/reviews";
import { deleteReview } from "../../store/reviews";
import { Link } from "react-router-dom";

function UserReviews() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const [isLoaded, setIsloaded] = useState(false);
  const [reviewId, setReviewId] = useState();
  const reviews = useSelector((state) => {
    return Object.values(state.reviews);
  });
  useEffect(() => {
    dispatch(getUserReviews()).then(() => setIsloaded(true));
  }, [dispatch]);

  const handleDeleteClick = (reviewId) => async (e) => {
    e.preventDefault();
    const response = await dispatch(deleteReview(reviewId));
    if (response) {
      //   dispatch(getUserReviews());
      history.push(`/spots/currentUser/reviews`);
    }

    // .then (() => history.push(`/spots/currentUser/reviews`))
    // .then(dispatch(getUserReviews()))
  };

  console.log(reviews);

  return (
    isLoaded && (
      <div>
        <h1>{reviews?.length > 0 ? "My Reviews" : "No Reviews"}</h1>
        {reviews?.map((review) => (
          <div key={review.id} className>
            <div>Location of Review: Spot# {review.id}</div>
            <div>My Comment: {review.review}</div>
            <div>Stars: {review.stars}</div>

            <button onClick={handleDeleteClick(review.id)}>
              Delete this Review
            </button>
          </div>
        ))}
      </div>
    )
  );
}

export default UserReviews;
