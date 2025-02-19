import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContact } from '../redux/contacts/operations';
import ContactForm from '../components/Contacts/ContactForm/ContactForm';
import ContactList from '../components/Contacts/ContactList/ContactList';
import Filter from '../components/Contacts/Filter/Filter';
import { Container } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
} 