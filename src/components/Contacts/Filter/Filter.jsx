import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/filters/slice';
import { selectNameFilter } from '../../../redux/filters/selectors';
import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box sx={{ mt: 3, mb: 2 }}>
      <TextField
        fullWidth
        label="Kişilerde ara..."
        variant="outlined"
        value={filter}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
} 