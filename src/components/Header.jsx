import React, { useState } from "react";
import Axios from "axios";

const Header = () => {
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
  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };
  let bgcolor = "";
  if (pokemon.type === "fire") {
    bgcolor = colors.fire;
  } else if (pokemon.type === "grass") {
    bgcolor = colors.grass;
  } else if (pokemon.type === "electric") {
    bgcolor = colors.electric;
  } else if (pokemon.type === "water") {
    bgcolor = colors.water;
  } else if (pokemon.type === "ground") {
    bgcolor = colors.ground;
  } else if (pokemon.type === "rock") {
    bgcolor = colors.rock;
  } else if (pokemon.type === "fairy") {
    bgcolor = colors.fairy;
  } else if (pokemon.type === "poison") {
    bgcolor = colors.poison;
  } else if (pokemon.type === "bug") {
    bgcolor = colors.bug;
  } else if (pokemon.type === "dragon") {
    bgcolor = colors.dragon;
  } else if (pokemon.type === "psychic") {
    bgcolor = colors.psychic;
  } else if (pokemon.type === "flying") {
    bgcolor = colors.flying;
  } else if (pokemon.type === "fighting") {
    bgcolor = colors.fighting;
  } else if (pokemon.type === "normal") {
    bgcolor = colors.normal;
  }

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
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
      }
    );
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
              id=""
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
                  Type :{" "}
                  <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2">
                    {pokemon.type.toUpperCase()}
                  </span>
                </p>
                <div className="flex justify-between">
                  <p className=" text-base">HP : {pokemon.hp}</p>
                  <p className=" text-base">Attack : {pokemon.attack}</p>
                  <p className=" text-base">Defence : {pokemon.defence}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
