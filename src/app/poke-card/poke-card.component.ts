import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {
  
  @Input()
  pokeName: string = '';

  @Input()
  public pokePic: string = '';

  @Input()
  public pokeType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
