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
				{store.Characters && store.Characters.map((people, index) => (
					<Characters key={index} name={people.name} uid={people.uid} />
				))}

			</div>
		</div>
	);
};