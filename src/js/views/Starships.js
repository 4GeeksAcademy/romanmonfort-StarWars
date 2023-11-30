import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import StarShipsCard from "../component/StarShipsCard";



const Starships = () => {
  const { store, actions } = useContext(Context)

  return (
    <div className="container">
      <div className="row m-0 ">
        {store.Starships && store.Starships.map((ship, index) => (
          <StarShipsCard key={index} name={ship.name} uid={ship.uid} />
        ))}
      </div>
    </div>
  )
}

export default Starships


