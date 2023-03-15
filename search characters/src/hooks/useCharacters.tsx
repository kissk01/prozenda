import { useContext } from 'react';
import CharactersContext from '../context/CharactersProvider';
import { UseCharactersContextType } from '../context/CharactersProvider';

const useCharacters = (): UseCharactersContextType => {
  return useContext(CharactersContext);
};

export default useCharacters;
