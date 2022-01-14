import { createSelector } from '@reduxjs/toolkit';

interface Contact {
  id: string;
  name: string;
  phone: string;
  img?: string;
}

interface IState {
  phonebook: {
    contacts: Contact[];
    filter: string;
    loading: boolean;
    error: boolean;
    alert: boolean;
  };
}

export const getLoading = (state: IState) => state.phonebook.loading;
export const getAlert = (state: IState) => state.phonebook.alert;
export const getError = (state: IState) => state.phonebook.error;
export const getFilter = (state: IState) => state.phonebook.filter;
export const getContacts = (state: IState) => state.phonebook.contacts;

export const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts;
  }
);
