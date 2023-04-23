export interface PokemonTypeStructure {
  slot: number;
  type: Name;
}

export interface Name {
  name: string;
}

export interface PokemonStructure {
  name: string;
  id: number;
  types: PokemonTypeStructure[];
  height: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface PokemonsUrl {
  url: string;
}

export interface PokemonListStructure {
  results: PokemonsUrl[];
}
