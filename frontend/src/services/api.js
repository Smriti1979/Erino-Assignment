import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000', // Replace with your backend URL
});

// API calls
export const getContacts = () => API.get('/contacts');
export const addContact = (contact) => API.post('/contacts', contact);
export const updateContact = (id, contact) => API.put(`/contacts/${id}`, contact);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);
