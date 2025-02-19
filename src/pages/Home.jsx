import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4, p: 4, textAlign: 'center' }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Kişi Yönetimi Uygulamasına Hoş Geldiniz
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Kişilerinizi güvenle yönetin ve organize edin
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