import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>()
  searchword: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchThis() {
    this.searchcriteria.emit(this.searchword)
  }
}
