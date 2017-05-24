import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterFilterPipe} from "./character-list/character-list-filter.pipe";
import {CharacterListSortPipe} from "./character-list/character-list-sort.pipe";
import {ForceComponent} from "./shared/components/force/force.component";
import {CharacterService} from "./shared/services/character.service";

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterFilterPipe,
    CharacterListSortPipe,
    ForceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
