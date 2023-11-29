import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Characters from "../component/characters";
import "../../styles/demo.css";

export const CharactersV = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className='row'>
				{store.Characters && store.Characters.map((planet, index) => (
					<Characters key={index} name={planet.name} uid={planet.uid} />
				))}

			</div>
		</div>
	);
};