import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

// Token işlemleri için helper fonksiyonlar
export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

// Auth işlemleri
export const authAPI = {
  async register(credentials) {
    try {
      const { data } = await instance.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Kayıt başarısız');
    }
  },

  async login(credentials) {
    try {
      const { data } = await instance.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      console.error('Login API Error:', error.response?.data);
      throw new Error('Email veya şifre hatalı');
    }
  },

  async logout() {
    try {
      await instance.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      throw new Error('Çıkış yapılırken hata oluştu');
    }
  },

  async refresh() {
    try {
      const { data } = await instance.get('/users/current');
      return data;
    } catch (error) {
      throw new Error('Oturum yenilenemedi');
    }
  },
};

// Contacts işlemleri
export const contactsAPI = {
  async fetchContacts() {
    try {
      const { data } = await instance.get('/contacts');
      return data;
    } catch (error) {
      throw new Error('Kişiler getirilemedi');
    }
  },

  async addContact(contact) {
    try {
      const { data } = await instance.post('/contacts', contact);
      return data;
    } catch (error) {
      throw new Error('Kişi eklenemedi');
    }
  },

  async deleteContact(contactId) {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      throw new Error('Kişi silinemedi');
    }
  },
};
