import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {CharacterService} from "../shared/services/character.service";

@Component({
	selector: 'character-list',
	templateUrl: 'character-list.component.html',
  styleUrls: ['character-list.component.css']
})
export class CharacterListComponent implements OnInit {
	characters: Character[];
	showDetails: boolean = true;
  charactersFilterBy: string;
  charactersSortBy: string;
  errorMessage: any;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.getCharacters()
      .subscribe(
        characters => this.characters = characters,
        error => this.errorMessage = <any>error
      );
  }

  sortOptions: string[] = [
    'name',
    'gender',
    'birth_year'
  ];

  toggleDetails(): void {
		this.showDetails = !this.showDetails;
	}

  reset(): void {
    this.charactersFilterBy = "";
    this.charactersSortBy = null;
  }

  onForceStrengthClicked(message: string): void {
    console.log(message);
  }

}
