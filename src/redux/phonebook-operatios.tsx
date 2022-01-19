import axios from 'axios';
import { Dispatch } from 'redux';
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
} from './phonebook-actions';

axios.defaults.baseURL = 'https://test-bakend-json-server.herokuapp.com';

interface Contact {
  id: string;
  name: string;
  phone: string;
  img?: string;
}

interface IParams {
  id: string;
  body: object;
}

type getStateFn = () => any;

const addContact = (name: string, phone: string) => (
  dispatch: Dispatch,
  getState: getStateFn
) => {
  const contact = { name, phone };
  dispatch(addContactRequest());
  const state = getState();
  const contacts = state.phonebook.contacts;
  const normalizedName = name.toLowerCase();
  if (
    contacts.find(
      (contact: Contact) => contact.name.toLowerCase() === normalizedName
    )
  ) {
    alert(`${name} is already in contacts`);
    dispatch(fetchContactSuccess({}));
    return;
  }

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((err) => dispatch(addContactError(err.message)));
};

const deleteContact = (id: string) => (dispatch: Dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((err) => dispatch(deleteContactError(err.message)));
};

const fetchContact = () => (dispatch: Dispatch) => {
  dispatch(fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((err) => dispatch(fetchContactError(err.message)));
};

const updateContact = ({ id, body }: IParams) => (dispatch: Dispatch) => {
  console.log(id);
  console.log(body);
  dispatch(updateContactRequest());
  axios
    .patch(`/contacts/${id}`, body)
    .then(({ data }) => dispatch(updateContactSuccess(data)))
    .catch((error) => dispatch(updateContactError(error.message)));
};

export default {
  addContact,
  deleteContact,
  fetchContact,
  updateContact
};
