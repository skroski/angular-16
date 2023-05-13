import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonSpecies } from './../pokemon-species';
@Component({
  selector: 'app-pokemon-species',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="h-[24em] text-gray-50">
          <img
            class="h-[16em] p-8 bg-white border-gray-50 rounded-sm"
            [src]="'/assets/pokemon/'+ pokemonSpecie.name.toLocaleLowerCase() + '.jpg'"
            alt="Imagem do pokemon: {{ pokemonSpecie.name }}"
          />
          <h2 class="text-bold text-yellow-400 text-2xl">{{ pokemonSpecie.name }}</h2>
          <p>
           Attack: {{ pokemonSpecie.attack }}
          </p>
          <div class="h-[8] my-4">
          <a [routerLink]="['/details', pokemonSpecie.id]" class="bg-yellow-500 text-zinc-800 p-2 rounded-sm"> Saiba Mais</a>
          </div>
          <hr />

    </section>
  `,
  styleUrls: ['./pokemon-species.component.scss'],
})
export class PokemonSpeciesComponent {
  @Input() pokemonSpecie!: PokemonSpecies;
}
