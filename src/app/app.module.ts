import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from '../material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokePageComponent } from './poke-page/poke-page.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeDialogComponent } from './poke-dialog/poke-dialog.component';
import { PokeHeaderComponent } from './poke-header/poke-header.component'

@NgModule({
  declarations: [
    AppComponent,
    PokePageComponent,
    PokeCardComponent,
    PokeDialogComponent,
    PokeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
