import { createContext, ReactElement, useMemo, useReducer } from 'react';
import {
  sortCharactersFromAToZ,
  sortCharactersFromZToA,
  sortCharactersFemale,
  sortCharactersMale,
} from '../lib/sort';

export type CharacterItem = {
  name: string;
  gender: 'male' | 'female' | 'n/a';
};

export type CharactersState = {
  count: number;
  next: RequestInfo | null;
  previous: string | null;
  visibleItems: number;
  results: CharacterItem[];
  searchTerm: string;
  loading: boolean;
};

const initDataState: CharactersState = {
  count: 0,
  next: '',
  previous: null,
  results: [],
  visibleItems: 0,
  searchTerm: '',
  loading: true,
};

const REDUCER_ACTION_TYPE = {
  CONTENT_LOADING: 'CONTENT_LOADING',
  UPDATE_CONTENT: 'UPDATE_CONTENT',
  SEARCH_CONTENT: 'SEARCH_CONTENT',
  SORT_FROM_A_TO_Z: 'SORT_FROM_A_TO_Z',
  SORT_FROM_Z_TO_A: 'SORT_FROM_Z_TO_A',
  SORT_MALE: 'SORT_MALE',
  SORT_FEMALE: 'SORT_FEMALE',
} as const;

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ActionTypeUnion =
  typeof REDUCER_ACTION_TYPE[keyof typeof REDUCER_ACTION_TYPE];

export type ReducerAction = {
  type: ActionTypeUnion;
  payload?: CharactersState;
};

const reducer = (
  state: CharactersState,
  action: ReducerAction
): CharactersState => {
  console.log('reducer called: ', action.type);
  switch (action.type) {
    case REDUCER_ACTION_TYPE.CONTENT_LOADING: {
      return { ...state, ...{ loading: true } };
    }
    case REDUCER_ACTION_TYPE.SEARCH_CONTENT: {
      console.log('RESET_CONTENT reducer', state);
      return {
        ...state,
        ...action.payload,
        ...{ searchTerm: 'search' },
        ...{ loading: false },
      };
    }
    case REDUCER_ACTION_TYPE.UPDATE_CONTENT: {
      if (!action.payload) {
        throw new Error('action.payload missing in UPDATE_CONTENT action');
      }
      return {
        ...state,
        ...action.payload,
        ...{ searchTerm: '' },
        ...{ loading: false },
      };
    }
    case REDUCER_ACTION_TYPE.SORT_FROM_A_TO_Z: {
      const results = sortCharactersFromAToZ(state.results);
      return { ...state, ...results };
    }
    case REDUCER_ACTION_TYPE.SORT_FROM_Z_TO_A: {
      const results = sortCharactersFromZToA(state.results);
      return { ...state, ...results };
    }
    case REDUCER_ACTION_TYPE.SORT_MALE: {
      const results = sortCharactersMale(state.results);
      return { ...state, ...results };
    }
    case REDUCER_ACTION_TYPE.SORT_FEMALE: {
      const results = sortCharactersFemale(state.results);
      console.log(' sorted Female:', { ...state, ...action.payload });
      return { ...state, ...results };
    }
    default:
      throw new Error('Unidentified reducer action type');
  }
};

const useCharactersContext = (initDataState: CharactersState) => {
  const [state, dispatch] = useReducer(reducer, initDataState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const count = state.count;

  const totalItems = state.count;

  const next = state.next;

  const previous = state.previous;

  const characters = state.results;

  const visibleItems = state.results.length;

  const searchTerm = state.searchTerm;

  const loading = state.loading;

  return {
    count,
    dispatch,
    REDUCER_ACTIONS,
    totalItems,
    next,
    previous,
    characters,
    visibleItems,
    searchTerm,
    loading,
  };
};

export type UseCharactersContextType = ReturnType<typeof useCharactersContext>;

const initCharactersContextState: UseCharactersContextType = {
  dispatch: () => {},
  count: 0,
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  next: null,
  previous: null,
  characters: [],
  visibleItems: 0,
  searchTerm: '',
  loading: true,
};

const CharactersContext = createContext<UseCharactersContextType>(
  initCharactersContextState
);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CharactersProvider = ({
  children,
}: ChildrenType): ReactElement => {
  return (
    <CharactersContext.Provider value={useCharactersContext(initDataState)}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContext;
