import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import {Injectable} from "@angular/core";
import {Character} from "../../model/character";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do'

@Injectable()
export class CharacterService {

	private charactersUrl: string = 'assets/api/characters.json';

  constructor(private http: Http){}

	getCharacters(): Observable<Character[]> {
		return this.http.get(this.charactersUrl)
		  .map((response: Response) => <Character[]>response.json())
			.do();
	}

}
