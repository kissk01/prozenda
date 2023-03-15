import { CharacterItem } from '../context/CharactersProvider';

export const sortCharactersFromAToZ = (characters: CharacterItem[]) =>
  characters.sort((a, b) =>
    a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1
  );

export const sortCharactersFromZToA = (characters: CharacterItem[]) =>
  characters.sort((a, b) =>
    a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? -1 : 1
  );

export const sortCharactersMale = (characters: CharacterItem[]) =>
  characters.sort((a) => (a.gender.toLocaleLowerCase() === 'male' ? -1 : 1));

export const sortCharactersFemale = (characters: CharacterItem[]) =>
  characters.sort((a) => (a.gender.toLocaleLowerCase() === 'female' ? -1 : 1));
