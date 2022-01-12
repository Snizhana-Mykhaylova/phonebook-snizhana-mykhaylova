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
  fetchContactByIdRequest,
  fetchContactByIdSuccess,
  fetchContactByIdError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError
} from './phonebook-actions.js';

axios.defaults.baseURL = 'http://localhost:4040';

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
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((err) => dispatch(addContactError(err.message)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((err) => dispatch(deleteContactError(err.message)));
};

const fetchContact = () => (dispatch) => {
  dispatch(fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((err) => dispatch(fetchContactError(err.message)));
};

const fetchContactById = (id) => (dispatch) => {
  dispatch(fetchContactByIdRequest());
  axios
    .get(`/contacts/${id}`)
    .then(({ data }) => dispatch(fetchContactByIdSuccess(data)))
    .catch((err) => dispatch(fetchContactByIdError(err.message)));
};

const updateContact = ({ id, body }) => (dispatch) => {
  console.log(id);
  console.log(body);
  dispatch(updateContactRequest());
  axios
    .patch(`/contacts/${id}`, body)
    .then(({ data }) => dispatch(updateContactSuccess(data)))
    .catch((error) => dispatch(updateContactError(error)));
};

export default {
  addContact,
  deleteContact,
  fetchContact,
  fetchContactById,
  updateContact
};
