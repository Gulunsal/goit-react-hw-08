import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";
import { 
  TextField, 
  InputAdornment, 
  Paper, 
  Container,
  Box 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

export default function SearchBox() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleClear = () => {
    dispatch(changeFilter(""));
  };

  return (
    <Container maxWidth="md">
      <Paper 
        elevation={2} 
        sx={{ 
          mt: 4, 
          mb: 2,
          p: 2,
          backgroundColor: 'background.paper' 
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Kişilerde ara..."
            value={currentFilter || ""}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: currentFilter && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear search"
                    onClick={handleClear}
                    edge="end"
                    size="small"
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                '&.MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'divider',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              },
            }}
            sx={{
              backgroundColor: 'background.default',
              borderRadius: 1,
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
}
