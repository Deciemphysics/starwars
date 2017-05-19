import { Character } from './character-list.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'characterListFilter'
})
export class CharacterFilterPipe implements PipeTransform {
    transform(characters: Character[], filterBy: string): Character[] {
        
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? characters.filter(
            (character: Character)=>
                character.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : characters; 
    };
}