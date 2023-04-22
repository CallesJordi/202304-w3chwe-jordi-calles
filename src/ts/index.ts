import AppComponent from "./components/AppComponent/AppComponent.js";
import PokemonCardComponent from "./components/PokemonCardComponent/PokemonCardComponent.js";

const appContainer: HTMLElement = document.querySelector(".root")!;

new AppComponent(appContainer);

const poke: HTMLElement = document.querySelector(".container")!;
new PokemonCardComponent(poke);
