import { PokemonService } from './../_services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'capture-pokemon',
    templateUrl: 'capture-pokemon.component.html'
})

export class CapturePokemonComponent implements OnInit {

  pokemon: string;

  constructor(
    public _pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.randomizePokemon();
  }

  randomizePokemon(){
      this._pokemonService.getAll151().subscribe( item => {
        const randomizeId = Math.floor(Math.random() * (151));
        this.pokemon = item.results[randomizeId].name;
        this.pokemon = this.pokemon.charAt(0).toUpperCase() + this.pokemon.slice(1);
      });
    }
}