/*
?   Challenge:
        - Grab a hold of the HTML elements that are necessary 
        - Use the https://pokeapi.co/ to retrieve the information of a pokemon 
        - Then using the input field, a user should be able to type in the pokemon name or number.

        *HINT There is a method you can use to grab a hold of the value contained within the input field

        - The button with the text of "Look", should execute a fetch to the Pokemon API
        The API should return the exact data for the pokemon-name/# that was provided to the input field

        * You will only need to fetch to one endpoint

        Display the results within each respected html element

        * Be sure to understand the data type you are working with to display the results correctly

        - Name
        - Image
        - Stats
        - Moves

        Bonus* 
        - When a user goes and types in another pokemon-name/#, the moves and stats keep stacking on top of the previous data.

        Handle clearing out the past data to present the new data.
*/

// ? Grabbing a hold of our HTML elements
// Grabbing a hold of input + button
let searchInput = document.querySelector(".search");
let searchButton = document.querySelector(".btn");

// ? Grabbing a hold of our display HTML elements
let pokeName = document.querySelector(".name");
let pokeImg = document.querySelector("#img-avatar");
let pokeStats = document.querySelector(".stats");
let pokeMoves = document.querySelector(".moves");

const displayPokemon = (pokemonObj) => {
  pokeName.textContent = pokemonObj.name;
  pokeImg.src = pokemonObj.img;

  while (pokeStats.firstChild) {
    pokeStats.removeChild(pokeStats.firstChild);
  }

  while (pokeMoves.firstChild) {
    pokeMoves.removeChild(pokeMoves.firstChild);
  }

  pokemonObj.stats.forEach((i) => {
    let statName = document.createElement("p");
    statName.textContent = i.stat.name + " " + i.base_stat;
    pokeStats.appendChild(statName);
  });

  pokemonObj.moves.forEach((i) => {
    let moveName = document.createElement("li");
    moveName.textContent = i.move.name;
    pokeMoves.appendChild(moveName);
  });
};

const getPokemon = async (pokemon) => {
  // Storing our fetch URL in a variable
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  // ? Using async/await
  let res = await fetch(url);
  let json = await res.json();

  let jsonObj = {
    name: json.name,
    img: json.sprites.front_default,
    moves: json.moves,
    stats: json.stats,
  };

  // Call a function to display the data we received - Passing our custom object
  displayPokemon(jsonObj);

  // ? Using .then syntax
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //         console.log(json)
  //     });
};

// ? Adding click event to our button
searchButton.addEventListener("click", () => {
  // Grabbing the input field's value
  let input = searchInput.value;
  getPokemon(input);
});
