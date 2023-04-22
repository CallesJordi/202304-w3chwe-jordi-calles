import { type PokemonStructure } from "../../types.js";
import Component from "../Component/Component.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonCardComponent extends Component {
  private pokemonData: PokemonStructure;

  constructor(parentElement: HTMLElement) {
    super(parentElement, "card", "li");
    (async () => this.getPokemonCard())();
  }

  getPokemonCard = async (): Promise<void> => {
    const response = await fetch(`${apiUrl}1`);

    const pokemonData = (await response.json()) as PokemonStructure;
    this.pokemonData = pokemonData;
    this.renderHtml();
  };

  renderHtml(): void {
    this.domElement.innerHTML = `
    <div class = "pokemon-Card">
      <img src="${this.pokemonData.sprites.other["official-artwork"].front_default}">
      <span>${this.pokemonData.id}</span>
      <h2>${this.pokemonData.name}</h2>
    </div>
    `;
  }
}

export default PokemonCardComponent;
