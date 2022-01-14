import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
  updateContactError,
  filterChange
} from './phonebook-actions';

interface Contact {
  id: string;
  name: string;
  phone: string;
  img?: string;
}

const contactsReducer = createReducer([], {
  [fetchContactSuccess.type]: (_, { payload }) => payload,
  [addContactSuccess.type]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updateContactSuccess.type]: (state, { payload }) => {
    state.map((contact: Contact) =>
      contact.id === payload.id ? payload : contact
    );
  }
});

const loading = createReducer(false, {
  [addContactRequest.type]: () => true,
  [addContactSuccess.type]: () => false,
  [addContactError.type]: () => false,
  [deleteContactRequest.type]: () => true,
  [deleteContactSuccess.type]: () => false,
  [deleteContactError.type]: () => false,
  [fetchContactRequest.type]: () => true,
  [fetchContactSuccess.type]: () => false,
  [updateContactRequest.type]: () => true,
  [updateContactSuccess.type]: () => false,
  [updateContactError.type]: () => false
});

const alert = createReducer(false, {
  [addContactRequest.type]: () => false,
  [addContactSuccess.type]: () => false,
  [addContactError.type]: () => false,
  [deleteContactRequest.type]: () => false,
  [deleteContactSuccess.type]: () => false,
  [deleteContactError.type]: () => false,
  [fetchContactRequest.type]: () => false,
  [fetchContactSuccess.type]: () => false,
  [fetchContactError.type]: () => false,
  [updateContactRequest.type]: () => false,
  [updateContactSuccess.type]: () => true,
  [updateContactError.type]: () => false
});

const error = createReducer(false, {
  [addContactRequest.type]: () => false,
  [addContactSuccess.type]: () => false,
  [addContactError.type]: () => true,
  [deleteContactRequest.type]: () => false,
  [deleteContactSuccess.type]: () => false,
  [deleteContactError.type]: () => true,
  [fetchContactRequest.type]: () => false,
  [fetchContactSuccess.type]: () => false,
  [fetchContactError.type]: () => true,
  [updateContactRequest.type]: () => false,
  [updateContactSuccess.type]: () => false,
  [updateContactError.type]: () => true
});

const filterReducer = createReducer('', {
  [filterChange.type]: (_, { payload }) => payload
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading,
  error,
  alert
});
