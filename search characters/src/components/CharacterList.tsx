import * as React from 'react';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import useCharacters from '../hooks/useCharacters';
import image from '../assets/image.png';
import image1 from '../assets/image1.png';
import { MDBBtn } from 'mdb-react-ui-kit';
import { ListSubheader } from '@mui/material';

const CharacterList = () => {
  const { dispatch, REDUCER_ACTIONS, characters, next, loading, searchTerm } =
    useCharacters();

  const [listUrl, setListUrl] = useState<RequestInfo>('');
  const [disableReset, setDisableReset] = useState<boolean>(true);

  const onLoadMore = () => {
    dispatch({ type: REDUCER_ACTIONS.CONTENT_LOADING });
    setDisableReset(false);
    if (next) setListUrl(next);
  };

  const onReset = () => {
    dispatch({ type: REDUCER_ACTIONS.CONTENT_LOADING });
    setDisableReset(true);
    setListUrl(`https://swapi.dev/api/people/`);
  };

  const getSearchData = async () => {
    const url = listUrl;
    if (!url) {
      return;
    }
    const data = await fetch(`${url}`);
    const parsedData = await data.json();
    dispatch({ type: REDUCER_ACTIONS.UPDATE_CONTENT, payload: parsedData });
  };

  useEffect(() => {
    getSearchData();
    return () => {
      setListUrl('');
    };
  }, [listUrl]);

  useEffect(() => {
    setListUrl('https://swapi.dev/api/people/');
  }, []);

  return (
    <>
      <ImageList sx={{ height: 450 }} gap={8} variant='masonry'>
        {characters.length === 0 && (
          <ImageListItem key='Subheader' cols={2}>
            <ListSubheader component='div'>No content</ListSubheader>
          </ImageListItem>
        )}
        {characters.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={index % 2 === 0 ? image1 : image}
              srcSet={index % 2 === 0 ? image1 : image}
              alt={item.name}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.name}
              subtitle={item.gender}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.name}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <MDBBtn onClick={onLoadMore} outline disabled={loading || next === null}>
        Load more
      </MDBBtn>
      <br></br>
      <MDBBtn
        onClick={onReset}
        outline
        disabled={loading || (disableReset && searchTerm === '')}
      >
        Reset
      </MDBBtn>
    </>
  );
};

export default CharacterList;
