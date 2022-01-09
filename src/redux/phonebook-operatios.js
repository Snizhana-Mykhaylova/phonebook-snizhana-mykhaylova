import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError
} from './phonebook-actions.js';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const addContact = (name, phone) => (dispatch, getState) => {
  const contact = { name, phone };
  dispatch(addContactRequest());
  const state = getState();
  const contacts = state.phonebook.contacts;
  const normalizedName = name.toLowerCase();
  if (
    contacts.find((contact) => contact.name.toLowerCase() === normalizedName)
  ) {
    alert(`${name} is already in contacts`);
    dispatch(fetchContactSuccess());
    return;
  }

  axios
    .post('/users', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((err) => dispatch(addContactError(err.message)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/users/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((err) => dispatch(deleteContactError(err.message)));
};

const fetchContact = () => (dispatch) => {
  dispatch(fetchContactRequest());
  axios
    .get('/users')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((err) => dispatch(fetchContactError(err.message)));
};

const updateContact = ({ id, body }) => (dispatch) => {
  const update = { body };

  dispatch(updateContactRequest());

  axios
    .patch(`/users/${id}`, update)
    .then(({ data }) => dispatch(updateContactSuccess(data)))
    .catch((error) => dispatch(updateContactError(error)));
};

export default {
  addContact,
  deleteContact,
  fetchContact,
  updateContact
};
