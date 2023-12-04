import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			Favorites:[],
			Films: [],
			Planets: [],
			Starships: [],
			Characters: [],
			Info: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getFilms: async () => {
				try {
				  const response = await fetch(`https://www.swapi.tech/api/films`);
				  const data = await response.json();
			  
				  setStore({
					Films: data.result
				  });
			  
				  console.log(data.result);
			  
				  localStorage.setItem(`Films`, JSON.stringify(data.result));
				} catch (err) {
				  console.error(err);
				}
			  },
			getStarships: async () => {
				try {
				  const response = await fetch(`https://www.swapi.tech/api/starships/`);
				  const data = await response.json();
			  
				  setStore({
					Starships: data.results
				  });
			  
				  console.log(data.results);
			  
				  localStorage.setItem(`Starships`, JSON.stringify(data.results));
				} catch (err) {
				  console.error(err);
				}
			  },
			  
			  getPlanets: async () => {
				try {
				  const response = await fetch(`https://www.swapi.tech/api/planets/`);
				  const data = await response.json();
			  
				  setStore({
					Planets: data.results
				  });
			  
				  console.log(data.results);
			  
				  localStorage.setItem(`Planets`, JSON.stringify(data.results));
				} catch (err) {
				  console.error(err);
				}
			  },
			  getCharacters: async () => {
				try {
				  const response = await fetch(`https://www.swapi.tech/api/people/`);
				  const data = await response.json();
			  
				  setStore({
					Characters: data.results
				  });
			  
				  console.log(data.results);
			  
				  localStorage.setItem(`Characters`, JSON.stringify(data.results));
				} catch (err) {
				  console.error(err);
				}
			  },
			  getInfo: async (url) => {
				try {
				  const response = await fetch(url);
				  const data = await response.json();
			  
				  setStore({
					Info: data.result.properties
				  });
			  
				  console.log(data.result);
			  
				  localStorage.setItem(`Info`, JSON.stringify(data.result));
				} catch (err) {
				  console.error(err);
				}
			  },
			  SetFavorite: (name)=>{
				const fav = getStore().Favorites;
                const newFavorite = { name: name };
				fav.push(newFavorite)

                  setStore ({Favorites : fav   });
				  console.log(getStore().Favorites)
			  },

			  removeFavorite: (index)=>{
				const fav = getStore().Favorites;			
                const newFavorite = fav.filter((element, i) => i !== index);				
                  setStore ({Favorites : newFavorite   });
				  console.log(getStore().Favorites)
			  },
		}
	};
};

export default getState;
