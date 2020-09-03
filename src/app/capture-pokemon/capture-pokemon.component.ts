import { PokemonService } from './../_services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'capture-pokemon',
    templateUrl: 'capture-pokemon.component.html'
})

export class CapturePokemonComponent implements OnInit {
    constructor(
        public _pokemonService: PokemonService
    ) { }

    ngOnInit() {
        this._pokemonService.getAll151().subscribe( item => {
            console.log(item);
        })
     }
}