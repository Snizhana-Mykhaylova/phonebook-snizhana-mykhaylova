import { createSelector } from '@reduxjs/toolkit';

export const getLoading = (state) => state.phonebook.loading;
export const getAlert = (state) => state.phonebook.alert;
export const getError = (state) => state.phonebook.error;
export const getFilter = (state) => state.phonebook.filter;
export const getContacts = (state) => state.phonebook.contacts;

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
