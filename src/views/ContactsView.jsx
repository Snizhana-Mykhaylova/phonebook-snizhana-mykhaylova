import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import * as selectors from '../redux/phonebook-selectors';
import operations from '../redux/phonebook-operatios';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getLoading);
  const isError = useSelector(selectors.getError);

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
      {isLoading && <h2>Loading ... </h2>}
      {isError && <h2>Something goes wrong :( </h2>}
    </div>
  );
};

export default ContactsView;
