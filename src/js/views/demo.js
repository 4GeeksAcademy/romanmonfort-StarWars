import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import CardPlanet from "../component/CardPlanet";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className='row'>
				{store.Planets && store.Planets.map((planet, index) => (
					<CardPlanet key={index} name={planet.name} uid={planet.uid} />
				))}

			</div>
		</div>
	);
};
