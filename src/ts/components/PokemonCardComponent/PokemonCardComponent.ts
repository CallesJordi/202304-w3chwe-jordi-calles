import { type PokemonStructure } from "../../types";
import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  private pokemonData: PokemonStructure;

  constructor(parentElement: HTMLElement, private readonly url: string) {
    super(parentElement, "card", "li");
    (async () => this.getPokemonCard())();
  }

  getPokemonCard = async (): Promise<void> => {
    const response = await fetch(this.url);

    const pokemonData = (await response.json()) as PokemonStructure;

    this.pokemonData = pokemonData;
    this.renderHtml();
  };

  renderHtml(): void {
    this.domElement.innerHTML = `
    <div class = "pokemon-Card">
      <img src="${this.pokemonData.sprites.other["official-artwork"].front_default}" alt="${this.pokemonData.name}">
      <span>${this.pokemonData.id}</span>
      <h2>${this.pokemonData.name}</h2>
    </div>
    `;
  }
}

export default PokemonCardComponent;
