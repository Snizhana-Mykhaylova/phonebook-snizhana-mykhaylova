import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');

export const addContactSuccess = createAction<object>(
  'contacts/addContactSuccess'
);

export const addContactError = createAction<string>('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest'
);

export const deleteContactSuccess = createAction<string>(
  'contacts/deleteContactSuccess'
);

export const deleteContactError = createAction<string>(
  'contacts/deleteContactError'
);

export const fetchContactRequest = createAction('contacts/fetchContactRequest');

export const fetchContactSuccess = createAction<object>(
  'contacts/fetchContactSuccess'
);

export const fetchContactError = createAction<string>(
  'contacts/fetchContactError'
);

export const updateContactRequest = createAction(
  'contacts/updateContactRequest'
);
export const updateContactSuccess = createAction<object>(
  'contacts/updateContactSuccess'
);
export const updateContactError = createAction<string>(
  'contacts/updateContactError'
);

export const filterChange = createAction<object>('contacts/filterChange');
