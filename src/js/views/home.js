import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center d-flex justify-content-center mt-5 h-100 container-fluid">
		<div className="row d-flex  prueba container-fluid h-100">
			<div className="films col-12 col-sm bloque d-flex align-items-center justify-content-center  m-2">
				<Link className="text-decoration-none" to='/films'><div className="text-white"><h1 className="h1">FILMS</h1></div></Link>
			</div>
			<div className="people col-12 col-sm bloque m-2  d-flex align-items-center justify-content-center">
				<div className="text-white"><h1 className="h1">PEOPLE</h1></div>
			</div>
			<div className="col-12 col-sm bloque planets m-2 d-flex align-items-center justify-content-center">
				<div className="text-white"><h1 className="h1">PLANETS</h1></div>
			</div>
		</div>
	</div>
);
