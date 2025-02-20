import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container,
  useTheme
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const theme = useTheme();

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ 
          justifyContent: 'space-between',
          minHeight: { xs: '56px', sm: '64px' }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              startIcon={<HomeIcon />}
              sx={{ 
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Ana Sayfa
            </Button>

            {isLoggedIn && (
              <Button
                component={Link}
                to="/contacts"
                color="inherit"
                startIcon={<ContactsIcon />}
                sx={{ 
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Kişiler
              </Button>
            )}
          </Box>
          
          <Box>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}