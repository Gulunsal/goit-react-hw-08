import React from "react";
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
  Box
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export default function LoginForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Geçerli bir email adresi giriniz")
      .required("Email gerekli"),
    password: Yup.string()
      .min(7, "Şifre en az 7 karakter olmalıdır")
      .required("Şifre gerekli"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Giriş Yap
        </Typography>
        
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Box component={Form} sx={{ mt: 2 }}>
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
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                margin="normal"
                variant="outlined"
              />
              
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                startIcon={<LoginIcon />}
                sx={{ mt: 3 }}
              >
                Giriş Yap
              </Button>
            </Box>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
