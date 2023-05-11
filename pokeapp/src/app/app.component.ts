import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <main class="bg-zinc-900">
    <header class="w-full h-12 bg-zinc-800">
      <h1 class="text-gray-200 text-4xl">PokeApp Logo</h1>
    </header>
    <section>
      <router-outlet></router-outlet>
    </section>
  </main>
  `,
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'pokeapp';
}
