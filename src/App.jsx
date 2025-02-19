import { ThemeProvider, createTheme, Button } from '@mui/material';
import Router from "./Router"
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#3498db',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" sx={{ m: 2 }}>
        Test Butonu
      </Button>
      <Router/>
    </ThemeProvider>
  )
}

export default App
