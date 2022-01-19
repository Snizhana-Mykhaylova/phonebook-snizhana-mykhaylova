import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import * as selectors from '../redux/phonebook-selectors';
import operations from '../redux/phonebook-operations';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getLoading);
  const isError = useSelector(selectors.getError);

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, []);

  return (
    <>
      <Filter />
      <h2 className='section__title'>Contacts</h2>
      <ContactForm />
      <ContactList />
      {isLoading && <Spinner color='primary'>Loading...</Spinner>}
      {isError && <h2>Something goes wrong :( </h2>}
    </>
  );
};

export default ContactsView;
