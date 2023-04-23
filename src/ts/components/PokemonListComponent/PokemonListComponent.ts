import { type PokemonsUrl, type PokemonListStructure } from "../../types";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonListComponent extends Component {
  private pokemonsUrl: PokemonsUrl[];

  constructor(parentElement: HTMLElement) {
    super(parentElement, "poke-list", "ul");
    (async () => this.getPokemonList())();
  }

  getPokemonList = async (): Promise<void> => {
    const response = await fetch(`${apiUrl}`);

    const pokemonList = (await response.json()) as PokemonListStructure;

    this.pokemonsUrl = pokemonList.results;

    this.renderHtml();
  };

  renderHtml(): void {
    this.pokemonsUrl.forEach((pokemon) => {
      new PokemonCardComponent(this.domElement, pokemon.url);
    });
  }
}

export default PokemonListComponent;
