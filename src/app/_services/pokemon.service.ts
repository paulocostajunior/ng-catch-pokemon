import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class PokemonService {
  constructor(private http: HttpClient) { }
    
  getAll151(): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  }
}