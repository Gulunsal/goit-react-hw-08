import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { addContact } from "../../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { 
  TextField, 
  Button, 
  Box, 
  Paper, 
  Typography,
  Container 
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function ContactsForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, "Sadece harf kullanılabilir")
      .required("İsim gerekli"),
    number: Yup.string()
      .matches(/^\+?[\d\s-]+$/, "Geçerli bir telefon numarası giriniz")
      .required("Telefon numarası gerekli"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
          Yeni Kişi Ekle
        </Typography>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Box component={Form}>
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
                label="Telefon Numarası"
                name="number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.number && Boolean(errors.number)}
                helperText={touched.number && errors.number}
                margin="normal"
                variant="outlined"
                sx={{ mt: 2 }}
              />
              
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PersonAddIcon />}
                sx={{ mt: 3 }}
                fullWidth
              >
                Kişi Ekle
              </Button>
            </Box>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
