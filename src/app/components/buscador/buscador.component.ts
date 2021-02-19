import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService, Pokemon } from '../../servicios/pokemons.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  pokemons:any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute, private _pokemonsService: PokemonsService, private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      // tslint:disable-next-line:no-string-literal
      this.termino = params['termino'];
      this.pokemons = this._pokemonsService.buscarPokemons( params['termino'] );
    });

  }

  // tslint:disable-next-line:typedef
  verPokemon( idx: number ){
    this.router.navigate( ['/heroe', idx] );
  }

}
