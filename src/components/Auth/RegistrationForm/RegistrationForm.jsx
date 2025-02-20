import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Alert
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, "Sadece harf kullanılabilir")
      .required("İsim gerekli"),
    email: Yup.string()
      .email("Geçerli bir email adresi giriniz")
      .required("Email gerekli"),
    password: Yup.string()
      .min(7, "Şifre en az 7 karakter olmalıdır")
      .required("Şifre gerekli"),
  });

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      await dispatch(register(values)).unwrap();
    } catch (error) {
      setStatus(error.message || 'Kayıt başarısız');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Kayıt Ol
        </Typography>
        
        <Formik
          validationSchema={validationSchema}
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, touched, errors, isSubmitting, status }) => (
            <Box component={Form} sx={{ mt: 2 }}>
              {status && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {status}
                </Alert>
              )}

              <TextField
                fullWidth
                label="İsim"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                margin="normal"
                variant="outlined"
              />
              
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
                variant="outlined"
              />
              
              <TextField
                fullWidth
                label="Şifre"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                startIcon={<PersonAddIcon />}
                disabled={isSubmitting}
                sx={{ mt: 3 }}
              >
                {isSubmitting ? 'Kayıt yapılıyor...' : 'Kayıt Ol'}
              </Button>
            </Box>
          )}
        </Formik>
      </Paper>
    </Container>
  );
} 