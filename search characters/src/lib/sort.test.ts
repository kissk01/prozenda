import { CharacterItem } from '../context/CharactersProvider';
import {
  sortCharactersFemale,
  sortCharactersFromAToZ,
  sortCharactersFromZToA,
  sortCharactersMale,
} from './sort';

const testArray = [
  {
    name: 'Luke Skywalker',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    gender: 'male',
  },
  {
    name: 'R2-D2',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    gender: 'female',
  },
] as CharacterItem[];

const testArrayFromAToZ = [
  {
    name: 'C-3PO',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    gender: 'female',
  },
  {
    name: 'Luke Skywalker',
    gender: 'male',
  },
  {
    name: 'R2-D2',
    gender: 'male',
  },
];

const testArrayFromZToA = [
  {
    name: 'R2-D2',
    gender: 'male',
  },

  {
    name: 'Luke Skywalker',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    gender: 'female',
  },
  {
    name: 'Darth Vader',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    gender: 'male',
  },
];

describe('Sorting from A to Z', () => {
  it('Array should be sorted in ascending order', () => {
    expect(testArrayFromAToZ).toStrictEqual(sortCharactersFromAToZ(testArray));
  });
});

describe('Sorting from Z to A', () => {
  it('Array should be sorted in descending order', () => {
    expect(testArrayFromZToA).toStrictEqual(sortCharactersFromZToA(testArray));
  });
});

describe('Sorting from Male', () => {
  it('Array should be sorted from Male to Female, testing first and last item', () => {
    const sorted = sortCharactersMale(testArray);
    expect(sorted[0].gender).toEqual('male');
    expect(sorted[sorted.length - 1].gender).toEqual('female');
  });
});

describe('Sorting from Female', () => {
  it('Array should be sorted from Female to Male, testing first and last item', () => {
    const sorted = sortCharactersFemale(testArray);
    expect(sorted[0].gender).toEqual('female');
    expect(sorted[sorted.length - 1].gender).toEqual('male');
  });
});
