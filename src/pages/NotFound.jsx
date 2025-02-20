import { Link } from 'react-router-dom';
import { Container, Paper, Typography, Button, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import HomeIcon from '@mui/icons-material/Home';

export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 4, p: 4, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <ErrorIcon sx={{ fontSize: 60, color: 'error.main' }} />
        </Box>
        
        <Typography variant="h4" component="h1" gutterBottom>
          404 - Sayfa Bulunamadı
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </Typography>
        
        <Button
          component={Link}
          to="/"
          variant="contained"
          startIcon={<HomeIcon />}
          sx={{ mt: 2 }}
        >
          Ana Sayfaya Dön
        </Button>
      </Paper>
    </Container>
  );
}
