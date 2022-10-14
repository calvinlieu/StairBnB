import { csrfFetch } from "./csrf";

const GET_ALL_BOOKINGS = "bookings/get-all";
const ADD_BOOKINGS = "bookings/add";
const DELETE_BOOKING = "bookings/delete";
const EDIT_BOOKING = "bookings/edit";

const getAllBookingsAction = (bookings) => {
  return {
    type: GET_ALL_BOOKINGS,
    bookings,
  };
};

const addBookingsAction = (booking) => {
  return {
    type: ADD_BOOKINGS,
    booking,
  };
};

const editBookingsAction = (booking) => {
  return {
    type: EDIT_BOOKING,
    booking,
  };
};

const deleteBookingsAction = (booking) => {
  return {
    type: DELETE_BOOKING,
    booking,
  };
};

//get bookings for spot based on id
export const getAllBookingForSpot = (bookings, spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${spotId}`);
  if (response.ok) {
    const bookings = await response.json();
    dispatch(getAllBookingsAction(bookings));
    const all = {};
    bookings.forEach((booking) => (all[booking.id] = booking));
    return { ...all };
  }
  return {};
};

//create a booking
export const createBooking = (booking) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${booking.id}`, {
    method: "POST",
    body: JSON.stringify(booking),
  });
  if (response.ok) {
    const newBooking = await response.json();
    dispatch(addBookingsAction(newBooking));
    return newBooking;
  }

  return response;
};

//edit a booking
export const editBooking = (booking) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${booking.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });
  if (response.ok) {
    const editedBooking = await response.json();
    dispatch(editBookingsAction(editedBooking));
    return editedBooking;
  }
  return response;
};

//delete a booking
export const deleteBooking = (booking) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${booking.id}`, {
    method: "DELETE",
  });

  const res = await response.json();
  dispatch(deleteBookingsAction(booking));
  return res;
};

const initialState = {};
const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOOKING: {
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    }
    case ADD_BOOKINGS: {
      const newState = { ...state };
      newState[action.booking.id] = action.booking;
      return newState;
    }
    case GET_ALL_BOOKINGS: {
      const allBookings = {};
      action.bookings.forEach((booking) => (allBookings[booking.id] = booking));
      let bookings = { ...allBookings };
      return bookings;
    }
    case EDIT_BOOKING: {
        const newState = { ...state };
        newState[action.booking.id] = action.booking;
        return newState;
      }
    default:
      return state;
  }
};

export default bookingsReducer;
