import { Component, OnInit } from '@angular/core';
import { PokemonsService, Pokemon } from '../../servicios/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];

  // tslint:disable-next-line:variable-name
  constructor( private _pokemonsService: PokemonsService, private router: Router ) { }

  ngOnInit(): void {
    this.pokemons = this._pokemonsService.getPokemons();
  }

  // tslint:disable-next-line:typedef
  verPokemon( idx: number ) {
    this.router.navigate( ['/pokemon', idx] );
  }
}
