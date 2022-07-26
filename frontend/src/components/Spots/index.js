import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots"
import "./spots.css"


const SpotsPage = () => {
  const dispatch = useDispatch();
  const spotsList = useSelector((state) => Object.values(state.spots));

  useEffect(() => {
    dispatch(getAllSpots());

}, [dispatch])

return (
  <div>{spotsList.map(spot => (
    <div key={spot.id}>
        <h3 className="spotName">{spot.name}</h3>
        <h4>{spot.city}, {spot.state}</h4>
        <img className='spotImg' src={spot.previewImage} alt= {spot.name}></img>
        <p>{spot.description}</p>
        <p> Price: ${spot.price}</p>
    </div>
))}</div>
)
}

export default SpotsPage;