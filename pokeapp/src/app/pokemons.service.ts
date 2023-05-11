import { Injectable } from '@angular/core';
import { PokemonSpecies } from './pokemon-species';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  protected pokemonSpeciesList: PokemonSpecies[] = [

    {
      id: 1,
      name: 'Bulbasaur',
      species: 'Grass',
      hp: 45,
      attack: 49,
      defense: 49,
      special_attack: 65,
      special_defense: 65,
      speed: 45,
    },
    {
      id: 2,
      name: 'Ivysaur',
      species: 'Poison',
      hp: 60,
      attack: 62,
      defense: 63,
      special_attack: 80,
      special_defense: 80,
      speed: 60,
    },
    {
      id: 3,
      name: 'Venusaur',
      species: 'Grass',
      hp: 80,
      attack: 82,
      defense: 83,
      special_attack: 100,
      special_defense: 100,
      speed: 80,
    },
    {
      id: 4,
      name: 'Charmander',
      species: 'Fire',
      hp: 39,
      attack: 52,
      defense: 43,
      special_attack: 60,
      special_defense: 50,
      speed: 65,
    },
    {
      id: 5,
      name: 'Charmeleon',
      species: 'Fire',
      hp: 58,
      attack: 64,
      defense: 58,
      special_attack: 80,
      special_defense: 65,
      speed: 80,
    },
    {
      id: 6,
      name: 'Charizard',
      species: 'Fire',
      hp: 78,
      attack: 84,
      defense: 78,
      special_attack: 109,
      special_defense: 85,
      speed: 100,
    },
    {
      id: 7,
      name: 'Squirtle',
      species: 'Water',
      hp: 44,
      attack: 48,
      defense: 65,
      special_attack: 50,
      special_defense: 64,
      speed: 43,
    },
    {
      id: 8,
      name: 'Wartortle',
      species: 'Water',
      hp: 59,
      attack: 63,
      defense: 80,
      special_attack: 65,
      special_defense: 80,
      speed: 58,
    },
    {
      id: 9,
      name: 'Blastoise',
      species: 'Water',
      hp: 79,
      attack: 83,
      defense: 100,
      special_attack: 85,
      special_defense: 105,
      speed: 78,
    },
    {
      id: 10,
      name: 'Caterpie',
      species: 'Bug',
      hp: 45,
      attack: 30,
      defense: 35,
      special_attack: 20,
      special_defense: 20,
      speed: 45,
    },
  ];

  constructor() { }

  getAllPokemonsSpecies() : PokemonSpecies[] {
    return this.pokemonSpeciesList;
  }

  getPokemonsSpeciesById(id: Number) : PokemonSpecies | undefined {
    return this.pokemonSpeciesList.find(pokemonSpecies => pokemonSpecies.id === id);
  }
}
