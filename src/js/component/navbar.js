import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3 text-white border solid p-2">
			<Link to="/" className="text-decoration-none">
				<span className="navbar-brand mb-0 h1 text-white">HOME</span>
			</Link>
			<Link to="/" className="text-decoration-none">
				<span className="navbar-brand mb-0 h1 text-white">SPECIES </span>
			</Link>
			<Link to="/" className="text-decoration-none star">
				<h1 className=" mb-0  star">STAR WARS </h1>
			</Link>
			<Link to="/starships" className="text-decoration-none">
				<span className="navbar-brand mb-0 h1 text-white">STARSHIPS </span>
			</Link>
			<Link to="/" className="text-decoration-none">
				<span className="navbar-brand mb-0 h1 text-white">VEHICLES </span>
			</Link>
		</nav>
	);
};
