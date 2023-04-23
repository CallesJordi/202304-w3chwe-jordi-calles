import AppComponent from "./components/AppComponent/AppComponent.js";
import PokemonListComponent from "./components/PokemonListComponent/PokemonListComponent.js";

const appContainer: HTMLElement = document.querySelector(".root")!;

new AppComponent(appContainer);

const poke: HTMLElement = document.querySelector(".container")!;
new PokemonListComponent(poke);
