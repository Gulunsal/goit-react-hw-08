import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors';
import { Container, Typography, Paper, Box } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 4, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <ContactPhoneIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        </Box>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Kişi Yönetimi Uygulamasına Hoş Geldiniz
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {isLoggedIn 
              ? `Merhaba ${user.name}, kişilerinizi güvenle yönetebilirsiniz`
              : 'Kişilerinizi güvenle yönetin ve organize edin'}
          </Typography>
        </Box>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" paragraph>
            Bu uygulama ile yapabilecekleriniz:
          </Typography>
          <Typography variant="body1" component="ul" sx={{ textAlign: 'left', pl: 4 }}>
            <li>Kişilerinizi kolayca ekleyebilirsiniz</li>
            <li>Kişilerinizi düzenleyebilirsiniz</li>
            <li>Kişilerinizi arayabilirsiniz</li>
            <li>Kişilerinizi silebilirsiniz</li>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
} 