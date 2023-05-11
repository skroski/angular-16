import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSpeciesComponent } from '../pokemon-species/pokemon-species.component';
import { PokemonSpecies } from './../pokemon-species';
import { PokemonsService } from './../pokemons.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filtrar por espécies" />
        <button type="button">Search</button>
      </form>
    </section>
    <section class="flex flex-wrap gap-8">
      <app-pokemon-species *ngFor="let pokemonSpecie of pokemonSpeciesList" [pokemonSpecie]="pokemonSpecie"></app-pokemon-species>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, PokemonSpeciesComponent],
})
export class HomeComponent {
  pokemonSpeciesList: PokemonSpecies[] = [];
  pokemonsService: PokemonsService = inject (PokemonsService);

  constructor() {
    this.pokemonSpeciesList = this.pokemonsService.getAllPokemonsSpecies();
  }
}
