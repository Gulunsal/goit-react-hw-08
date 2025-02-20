import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { login } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
  Alert,
  InputAdornment,
  IconButton
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Geçerli bir email adresi giriniz")
      .required("Email gerekli"),
    password: Yup.string()
      .min(7, "Şifre en az 7 karakter olmalıdır")
      .required("Şifre gerekli"),
  });

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      await dispatch(login(values)).unwrap();
    } catch (error) {
      setStatus(error.message || 'Giriş başarısız');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          mt: 8
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Giriş Yap
        </Typography>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, isSubmitting, status }) => (
            <Form style={{ width: '100%' }}>
              {status && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {status}
                </Alert>
              )}

              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
              />

              <TextField
                fullWidth
                id="password"
                name="password"
                label="Şifre"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                margin="normal"
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
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                startIcon={<LoginIcon />}
                sx={{ mt: 3, mb: 2 }}
              >
                {isSubmitting ? 'Giriş yapılıyor...' : 'Giriş Yap'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
