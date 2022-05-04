import { Component, OnInit } from '@angular/core';
import { pokemon, pokemonDetails } from '../data/data_model';
import { GetDataService } from '../data/get-data.service';

@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.scss']
})
export class PokePageComponent implements OnInit {
  public pokemonList!: pokemon[];
  public pokemonDetails: pokemonDetails[] = []

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getPokemonDetails();
  }

  getPokemonDetails(): void {
    this.getDataService.getPokemonList().subscribe(
      list => {
        this.pokemonList = list.results
        console.log(this.pokemonList)
        this.pokemonList.forEach(pokemon => 
          this.getDataService.getPokemonDetails(pokemon.url).subscribe(
            details => {
              this.pokemonDetails.push(details)
          }));
        console.log(this.pokemonDetails);
      }
    );
  }
}
