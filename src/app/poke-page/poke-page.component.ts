import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, switchMap, tap } from 'rxjs';
import { pokemon, pokemonDetails } from '../data/data_model';
import { GetDataService } from '../data/get-data.service';

@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.scss']
})
export class PokePageComponent implements OnInit {
  public pokemonDetails: pokemonDetails[] = []

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
//    this.getPokemonDetails();
    this.getPokemonDs();
  }

  getPokemonDs(): void {
    let pokemonObs: Observable<any>[] = []
    this.getDataService.getPokemonList().pipe(
      switchMap(result => {
        result.results.forEach((pokemon: pokemon) => pokemonObs.push(this.getDataService.getPokemonDetails(pokemon.url)))
        return forkJoin(pokemonObs)
      })
    ).subscribe(result => {
      console.log(result),
      this.pokemonDetails = result
    });
  }
}