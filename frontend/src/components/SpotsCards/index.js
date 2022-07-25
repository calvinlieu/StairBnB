import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getSpotDetails } from "../../store/spots"
import "./Card.css"
import { useHistory, Route } from "react-router-dom";


function Card({ spot }) {
  const dispatch = useDispatch()
  const history = useHistory();
  async function handleClick(e) {
    const clickedSpot = await dispatch(getSpotDetails(spot.id))
    history.push(`/spots/${spot.id}`)
  }

  return (
    <div id={`spot-${spot.id}`} className="spot-card-container"
      onClick={(e) => handleClick(e)}
    >
      <div className="">
        <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-39283022/original/8e07d34d-eb2b-45f6-8c75-353ff6a588cb.jpeg?im_w=960" alt="" className="spot-img" />
        <div>{spot.city} {spot.state}</div>
        <div>
          <i className="fa-solid fa-star"></i>
          <p>{spot.avgStarRating}</p>
        </div>
        <p>79 miles away</p>
        <p><strong>${spot.price}</strong> night</p>
      </div>
    </div>
  )
}

export default Card