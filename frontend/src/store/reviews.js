import { csrfFetch } from "./csrf";

const GET_REVIEWS = "reviews/get_reviews";
const ADD_REVIEW = "reviews/add_reviews"

const getSpotReviews = (spotReviews) => {
  return {
    type: GET_REVIEWS,
    spotReviews,
  };
};

const createReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}

//get all reviews by a spotId
export const spotReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch("/api/reviews/:spotId");
  const reviews = await response.json();
  dispatch(getSpotReviews(reviews));
  return reviews;
};


//create a review for a spot
export const addReview = (reviews, spotId) => async (dispatch) => {
    const { stars, review } = reviews;
    const response = await csrfFetch(`/api/reviews/${spotId}/create`, {
        method: 'POST', 
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({stars, review})
    }) 

    const data = await response.json();
    dispatch(createReview(data));
    return data;
    
}



const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REVIEWS: {
      const arr = [];
      action.spotReviews.forEach((review) => (arr[review.id] = review));
      const newState = { ...arr };
      return newState;
    }
    case ADD_REVIEW: {
        let newState = {...state};
        newState[action.review.id] = action.review
        return newState;
    }

    default:
      return state;
  }
};

export default reviewReducer;
