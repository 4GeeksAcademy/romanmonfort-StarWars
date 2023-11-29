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
			Swapi: [],
			Films: [],
			Planets: [],
			Starships: [],
			Characters: [],
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
				  const response = await fetch(`https://www.swapi.tech/api/characters/`);
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
		}
	};
};

export default getState;
