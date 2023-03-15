import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { ReactElement, useState, ChangeEvent, useEffect } from 'react';
import useCharacters from '../hooks/useCharacters';

type SearchProps = {};

const SearchCharacter = ({}: SearchProps): ReactElement => {
  const { dispatch, REDUCER_ACTIONS, loading } = useCharacters();

  const [inputValue, setInputValue] = useState<string>('');
  const [searchUrl, setSearchUrl] = useState<RequestInfo>('');

  const onTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSearch = () => {
    if (!inputValue) {
      return;
    }
    dispatch({ type: REDUCER_ACTIONS.CONTENT_LOADING });
    const url = `https://swapi.dev/api/people/?search=${inputValue}`;
    setSearchUrl(url);
  };

  const getSearchData = async () => {
    if (!searchUrl) {
      return;
    }
    const data = await fetch(searchUrl);
    const parsedData = await data.json();
    dispatch({ type: REDUCER_ACTIONS.SEARCH_CONTENT, payload: parsedData });
    setInputValue('');
  };

  useEffect(() => {
    getSearchData();
    return () => {
      setSearchUrl('');
    };
  }, [searchUrl]);

  const content = (
    <>
      <MDBInput
        className='main--search__button'
        label='Search character'
        id='formControlLg'
        type='text'
        size='lg'
        onChange={onTermChange}
        value={inputValue}
      />
      <br />
      <MDBBtn onClick={onSearch} disabled={loading} outline>
        Search character
      </MDBBtn>
    </>
  );
  return content;
};
export default SearchCharacter;
