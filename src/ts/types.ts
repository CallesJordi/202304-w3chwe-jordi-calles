export interface PokemonStructure {
  name: string;
  id: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  };
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