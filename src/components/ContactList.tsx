import { useSelector } from 'react-redux';

import ContactItem from './ContactItem';
import * as selectors from '../redux/phonebook-selectors';

interface Contact {
  id: string;
  name: string;
  phone: string;
  img?: string;
}

const ContactList = () => {
  const contacts: Contact[] = useSelector(selectors.getFilteredContacts);

  return (
    <ul className='list'>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
