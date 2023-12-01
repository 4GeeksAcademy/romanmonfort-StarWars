import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import Starships from "./views/Starships";
import injectContext from "./store/appContext";
import Characters from "./component/characters";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Films from "./views/Films";
import { CharactersV } from "./views/charactersV";
import InfoView from "./views/InfoView";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/starships" element={<Starships />} />
						<Route path="/films" element={<Films/>}/>
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/characters" element={<CharactersV/>} />
						<Route path="/info/:type/:id" element={<InfoView/>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
