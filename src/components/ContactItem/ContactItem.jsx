import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operations from '../../redux/phonebook-operatios';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      <button onClick={() => dispatch(operations.deleteContact(contact.id))}>
        Delete
      </button>
      <NavLink
        to={{
          pathname: `/update/${contact.id}`
        }}
      >
        Update
      </NavLink>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(operations.deleteContact(id))
});

export default ContactItem;
