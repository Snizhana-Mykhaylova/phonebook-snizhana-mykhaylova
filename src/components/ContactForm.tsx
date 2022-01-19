import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import operations from '../redux/phonebook-operations';

const ContactForm = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(operations.addContact(name, phone));
    setName('');
    setPhone('');
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='name' hidden>
          Name
        </Label>
        <Input
          value={name}
          placeholder='Name'
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
          value={phone}
          placeholder='Phone'
          type='tel'
          name='phone'
          pattern='(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})'
          title='Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +'
          required
          onChange={handleChangePhone}
        />
      </FormGroup>

      <Button
        className='add-contact-button'
        type='submit'
        variant='contained'
        color='primary'
      >
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
