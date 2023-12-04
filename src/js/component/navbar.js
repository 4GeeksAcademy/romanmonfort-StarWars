import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
   const {store,actions} = useContext(Context)

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
			<div className="dropdown">
				<button className="btn Btnt dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					
				</button>
				<ul className="dropdown-menu bg-warning dropdown-menu-end favorite-list">
				{store.Favorites && store.Favorites.map((element, index) => (
                 <li key={index} >
					<div className="d-flex row">
						<div className="col-8"><p>{element.name}</p></div>
				 <div className="col"> <i className="fa-solid fa-trash m-1 border" style={{ color: '#0c0d0d' }} onClick={() => actions.removeFavorite(index)}></i></div>
				
					</div>
			   </li> ))}
				</ul>
			</div>
		</nav>
	);
};
