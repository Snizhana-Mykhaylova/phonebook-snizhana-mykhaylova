import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operations from '../../redux/phonebook-operatios';
import noUser from '../../utils/noUser.png';
import { Row, Col, Button } from 'reactstrap';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <Row xs='2'>
        <Col className='bg-light border phone-fild'>
          <img
            className='user-photo'
            src={contact.img || noUser}
            alt={contact.name}
          />

          <span> {contact.name}</span>
        </Col>
        <Col className='bg-light border phone-fild'>
          <span>{contact.phone}</span>

          <div className='button-set'>
            <Button
              color='light'
              onClick={() => dispatch(operations.deleteContact(contact.id))}
            >
              <DeleteOutlinedIcon color='primary' />
            </Button>
            <Button color='light'>
              <NavLink
                to={{
                  pathname: `/update/${contact.id}`
                }}
              >
                <BorderColorOutlinedIcon color='primary' />
              </NavLink>
            </Button>
          </div>
        </Col>
      </Row>
    </li>
  );
};

export default ContactItem;
