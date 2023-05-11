import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ pokemonSpeciesId}}
    </p>
  `,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute)
  pokemonSpeciesId  = 0;
  constructor(){
    this.pokemonSpeciesId = Number(this.route.snapshot.params['id'])
  }

}
