import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, Observable, switchMap, tap } from 'rxjs';
import { pokemon, pokemonDetails } from '../data/data_model';
import { GetDataService } from '../data/get-data.service';

@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.scss']
})
export class PokePageComponent implements OnInit {
  public pokemonDetailsBackup: pokemonDetails[] = []
  public pokemonDetails: pokemonDetails[] = []

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
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
        this.pokemonDetails = result,
        this.pokemonDetailsBackup = result
    });
  }

  setFilter(filterValue: any): void {
    this.pokemonDetails = this.pokemonDetailsBackup
    console.log(filterValue)
    if (filterValue) {
      this.pokemonDetails = this.pokemonDetails.filter(function (ele, i, array) {
        let arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(filterValue)
      })
    }
    else {
      console.log(this.pokemonDetails)
    }
    console.log(this.pokemonDetails)
  }
}