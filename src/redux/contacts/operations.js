import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsAPI } from '../../services/api';

// Kişileri getirme işlemi
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await contactsAPI.fetchContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Kişi ekleme işlemi
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      return await contactsAPI.addContact(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Kişi silme işlemi
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      return await contactsAPI.deleteContact(contactId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
