import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contacts/operations';
import { selectContacts } from '../../../redux/contacts/selectors';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Paper,
  Alert,
  Snackbar
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      setError(`${name} zaten kişilerinizde mevcut`);
      return;
    }

    try {
      await dispatch(addContact({ name, number })).unwrap();
      setSuccess(true);
      setName('');
      setNumber('');
    } catch (error) {
      setError('Kişi eklenirken bir hata oluştu');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Yeni Kişi Ekle
        </Typography>

        {error && (
          <Alert severity="error" onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        <TextField
          required
          label="İsim"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-ZğüşıöçĞÜŞİÖÇ]+(([' -][a-zA-ZğüşıöçĞÜŞİÖÇ ])?[a-zA-ZğüşıöçĞÜŞİÖÇ]*)*$"
          title="İsim sadece harf, kesme işareti, tire ve boşluk içerebilir"
          fullWidth
        />

        <TextField
          required
          label="Telefon"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Telefon numarası rakamlardan oluşmalı ve boşluk, tire, parantez içerebilir"
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          startIcon={<PersonAddIcon />}
          sx={{ mt: 1 }}
        >
          Kişi Ekle
        </Button>
      </Box>

      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Kişi başarıyla eklendi!
        </Alert>
      </Snackbar>
    </Paper>
  );
} 