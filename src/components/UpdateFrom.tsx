import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  UncontrolledAlert,
  Spinner
} from 'reactstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../redux/phonebook-selectors';
import operations from '../redux/phonebook-operations';
import noUser from '../utils/noUser.png';

type Contact = { id: string; name: string; phone: string; img?: string };

const UpdateForm = () => {
  const contacts: Contact[] = useSelector(selectors.getContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.getLoading);
  const { id } = useParams();
  const [contact] = contacts.filter((contact) => contact.id == id);

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState(noUser);

  const isAlert = useSelector(selectors.getAlert);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  useEffect(() => {
    setPhone(contact ? contact.phone : '');
    setName(contact ? contact.name : '');
  }, [contact]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { name, phone };
    const id = contact.id;
    dispatch(operations.updateContact({ id, body }));
  };

  return (
    <>
      <div className='title-section'>
        <Button className='button-goback' color='light'>
          <NavLink to='/contacts'>
            <ArrowBackIcon />
          </NavLink>
        </Button>
        <img className='user-photo_update' src={img} alt={name} />
        <h3 className='user-name'>{name}</h3>
      </div>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup>
          <Label hidden>name</Label>
          <Input
            value={name}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChangeName}
          />
        </FormGroup>
        <FormGroup>
          <Label for='phone' hidden>
            setPhone
          </Label>
          <Input
            className='form-last-input'
            value={phone}
            type='tel'
            name='phone'
            required
            onChange={handleChangePhone}
          />
          {isLoading && <Spinner color='primary'>Loading...</Spinner>}
        </FormGroup>
        {isAlert && (
          <UncontrolledAlert color='success'>
            {name} was successfuly updated
          </UncontrolledAlert>
        )}
        <Button type='submit' variant='contained' color='primary'>
          Edit
        </Button>
      </Form>
    </>
  );
};

export default UpdateForm;
