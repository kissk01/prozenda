import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ReactElement, useState } from 'react';
import useCharacters from '../hooks/useCharacters';
import { ActionTypeUnion } from '../context/CharactersProvider';

const SelectSort = ({}): ReactElement => {
  const [sort, setSort] = useState('');
  const { dispatch, REDUCER_ACTIONS, visibleItems, count } = useCharacters();

  const onSelectSort = (event: SelectChangeEvent) => {
    const selected = event.target.value as ActionTypeUnion;
    setSort(selected);
    switch (selected) {
      case REDUCER_ACTIONS.SORT_FROM_A_TO_Z: {
        dispatch({ type: REDUCER_ACTIONS.SORT_FROM_A_TO_Z });
        return;
      }
      case REDUCER_ACTIONS.SORT_FROM_Z_TO_A: {
        dispatch({ type: REDUCER_ACTIONS.SORT_FROM_Z_TO_A });
        return;
      }
      case REDUCER_ACTIONS.SORT_FEMALE: {
        dispatch({ type: REDUCER_ACTIONS.SORT_FEMALE });
        return;
      }
      case REDUCER_ACTIONS.SORT_MALE: {
        dispatch({ type: REDUCER_ACTIONS.SORT_MALE });
        return;
      }
    }
  };

  const content = (
    <Box sx={{ minWidth: 120, maxWidth: 300 }}>
      <p>{`Showing ${visibleItems} results of ${count}`}</p>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Sort</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={sort}
          label='Sort by'
          onChange={onSelectSort}
          disabled={count === 0}
        >
          <MenuItem value={REDUCER_ACTIONS.SORT_FROM_A_TO_Z}>A-Z</MenuItem>
          <MenuItem value={REDUCER_ACTIONS.SORT_FROM_Z_TO_A}>Z-A</MenuItem>
          <MenuItem value={REDUCER_ACTIONS.SORT_FEMALE}>Female</MenuItem>
          <MenuItem value={REDUCER_ACTIONS.SORT_MALE}>Male</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
  return content;
};

export default SelectSort;
