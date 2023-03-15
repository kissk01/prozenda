import SearchCharacter from './SearchCharacter';
import SelectSort from './SelectSort';
import CharacterList from './CharacterList';

const Wrapper = () => {
  const content = (
    <>
      <div className='wrapper'>
        <main className='main main--search'>
          <SearchCharacter />
        </main>
        <SelectSort />
        <main className='main main--search'>
          <CharacterList />
        </main>
      </div>
    </>
  );

  return content;
};
export default Wrapper;
