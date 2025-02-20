import axios from 'axios';

// API'nin temel URL'si
axios.defaults.baseURL = 'https://connections-api.goit.global';

// Token işlemleri
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Auth işlemleri
export const authAPI = {
  // POST /users/signup
  async register(credentials) {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  },

  // POST /users/login
  async login(credentials) {
    const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  },

  // POST /users/logout
  async logout() {
    await axios.post('/users/logout');
    clearAuthHeader();
  },

  // GET /users/current
  async refresh() {
    const { data } = await axios.get('/users/current');
    return data;
  },
};

// Contacts işlemleri
export const contactsAPI = {
  // GET /contacts
  async fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
  },

  // POST /contacts
  async addContact(contact) {
    const { data } = await axios.post('/contacts', contact);
    return data;
  },

  // DELETE /contacts/{contactId}
  async deleteContact(contactId) {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  },
};
