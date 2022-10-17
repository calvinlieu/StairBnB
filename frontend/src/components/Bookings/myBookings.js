import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserBooking } from "../../store/bookings";
import "./myBookings.css"

const MyBookings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookings = useSelector((state) => Object.values(state?.bookings));

  console.log(bookings, "booking");

  useEffect(() => {
    dispatch(getCurrentUserBooking());
  }, [dispatch]);


  return (
    <div className="main-container">
      <div className="trips">Trips</div>
      <div className="upcoming">Upcoming Reservations</div>
      {bookings?.map((booking) => {
        return (
            <div className="each-booking">
                <div>Start Date: {booking?.startDate}</div>
                <div>End Date: {booking.endDate}</div>
            </div>
            
        );
      })}
    </div>
  );
};

export default MyBookings;
