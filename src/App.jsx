import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    type: "",
  });

  let bgcolor = "";
  let textColor = "";
  switch (pokemon.type) {
    case "fire":
      textColor = "#EE8130";
      bgcolor = "#FDDFDF";
      break;
    case "grass":
      bgcolor = "#DEFDE0";
      textColor = "#7AC74C";
      break;
    case "electric":
      bgcolor = "#FCF7DE";
      textColor = "#F7D02C";
      break;
    case "water":
      bgcolor = "#DEF3FD";
      textColor = "#6390F0";
      break;
    case "ground":
      bgcolor = "#f4e7da";
      textColor = "#E2BF65";
      break;
    case "rock":
      bgcolor = "#d5d5d4";
      textColor = "#B6A136";
      break;
    case "fairy":
      bgcolor = "#fceaff";
      textColor = "#D685AD";
      break;
    case "poison":
      bgcolor = "#A98FF3";
      textColor = "#A33EA1";
      break;
    case "bug":
      bgcolor = "#f8d5a3";
      textColor = "#A6B91A";
      break;
    case "dragon":
      bgcolor = "#97b3e6";
      textColor = "#6F35FC";
      break;
    case "psychic":
      bgcolor = "#eaeda1";
      textColor = "#F95587";
      break;
    case "flying":
      bgcolor = "#F5F5F5";
      textColor = "#A98FF3";
      break;
    case "fighting":
      bgcolor = "#E6E0D4";
      textColor = "#C22E28";
      break;
    case "normal":
      bgcolor = "#F5F5F5";
      textColor = "#A8A77A";
      break;
    case "ghost":
      bgcolor = "#A98FF3";
      textColor = "#735797";
      break;
    default:
      bgcolor = "#DEF3FD";
      textColor = "#B7B7CE";

      break;
  }
  let input = document.querySelector("#input");
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response);
        console.log(response.data.types[0].type.name);
        setPokemon({
          name: response.data.name,
          species: response.data.species.name,
          img: response.data.sprites.other["official-artwork"].front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      })
      .catch((err) => {
        console.log(err.message);
        alert("Please enter a proper Name");
        setPokemonName("");
        input.value = "";
      });
  };
  return (
    <div className="h-screen bg-[#EEEEEE]">
      <div className="w-screen h-40 bg-[#2B3467] flex justify-center">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl font-bold p-4 text-white">Pokemon</h1>
          <div className="flex gap-2">
            <input
              type="text"
              className="rounded-md outline-0 p-2"
              placeholder="Name of Pokemon..."
              name=""
              id="input"
              onChange={(e) => {
                setPokemonName(e.target.value.toLowerCase());
              }}
            />
            <button
              className="rounded-md bg-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-blue-500"
              onClick={searchPokemon}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* main section */}
      <div className="text-center">
        {!pokemonChosen ? (
          <h1>Please Choose a pokemon</h1>
        ) : (
          <div className="p-10 flex justify-center">
            <div
              className="rounded overflow-hidden shadow-lg dark:shadow-gray-800 flex flex-col "
              style={{ backgroundColor: bgcolor }}
            >
              <img
                className="w-6/12 self-center"
                src={pokemon.img}
                alt="Pokemon"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {pokemon.name.toUpperCase()}
                </div>
                <p className="text-base">
                  <span className="font-bold">Type :</span>
                  <span
                    className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    style={{ backgroundColor: textColor }}
                  >
                    {pokemon.type.toUpperCase()}
                  </span>
                </p>
                <div className="flex flex-col md:flex-row justify-between">
                  <p className=" text-base">
                    <span className="font-bold">HP :</span> {pokemon.hp}
                  </p>
                  <p className=" text-base">
                    <span className="font-bold">Attack :</span>
                    {pokemon.attack}
                  </p>
                  <p className=" text-base">
                    <span className="font-bold">Defence :</span>{" "}
                    {pokemon.defence}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
