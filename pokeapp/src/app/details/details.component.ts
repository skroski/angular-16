import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokemonSpecies } from './../pokemon-species';
import { PokemonsService } from '../pokemons.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article>
    <img
            class="h-[16em] p-8 bg-white border-gray-50 rounded-sm"
            [src]="'/assets/pokemon/'+ (pokemonSpecies?.name) + '.jpg'"
            alt="Imagem do pokemon: {{ pokemonSpecies?.name }}"
          />
      <ul class="text-gray-200">
        <li>HP: {{pokemonSpecies?.hp}}</li>
        <li>Ataque: {{pokemonSpecies?.attack}}</li>
        <li>Tipo: {{ pokemonSpecies?.defense}}</li>
        <li>Defesa: {{ pokemonSpecies?.defense}}</li>
        <li>Ataque Especial: {{ pokemonSpecies?.special_attack }}</li>
        <li>Defesa Especial: {{ pokemonSpecies?.special_defense}}</li>
        <li>Velocidade: {{ pokemonSpecies?.speed}}</li>
      </ul>
    </article>
    <div class="my-4">
    <a href="http://localhost:4200/" class="pointer cursor-pointer p-4 rounded-sm bg-yellow-900 text-yellow-400" >Voltar Home</a>
    </div>

  `,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute);
  pokemonService = inject(PokemonsService);
  pokemonSpecies?: PokemonSpecies | undefined;

  constructor(){
    const pokemonSpeciesId = Number(this.route.snapshot.params['id'])
    const nameLower = this.pokemonSpecies?.name.toLocaleLowerCase()
    this.pokemonSpecies = this.pokemonService.getPokemonsSpeciesById(pokemonSpeciesId);
  }

}
