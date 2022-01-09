import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';

import operations from '../../redux/phonebook-operatios';

const ContactForm = ({ onAddContact }) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handlerChangeName = (e) => setName(e.target.value);
  const handlerChangePhone = (e) => setPhone(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddContact(name, phone);
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
          onChange={handlerChangeName}
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
          onChange={handlerChangePhone}
        />
      </FormGroup>

      <Button type='submit' variant='contained' color='primary'>
        Add contact
      </Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (name, phone) => dispatch(operations.addContact(name, phone))
});

export default connect(null, mapDispatchToProps)(ContactForm);
