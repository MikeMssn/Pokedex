import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { pokemonDetails } from '../data/data_model';
import { PokeDialogComponent } from '../poke-dialog/poke-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {
  animal!: string;
  name!: string;

  @Input()
  public pokeDetails!: pokemonDetails;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {

    this.dialog.open(PokeDialogComponent, {
      data: this.pokeDetails,
      height: '600px',
      width: '1000px'
    })

  }
}
