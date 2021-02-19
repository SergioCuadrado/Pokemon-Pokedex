import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../servicios/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent {

  pokemon: any = {};


  constructor( private activatedRoute: ActivatedRoute , private _pokemonsService: PokemonsService ) { 

    this.activatedRoute.params.subscribe( params => {
      this.pokemon = this._pokemonsService.getPokemon( params['id'] );

    });
  }
}
