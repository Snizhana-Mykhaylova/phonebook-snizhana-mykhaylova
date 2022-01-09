import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import operations from '../redux/phonebook-operatios';

const UpdateView = ({ contacts, onUpdateContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact] = contacts.filter((contact) => contact.id === Number(id));

  const [phone, setPhone] = useState(contact.phone);
  const [name, setName] = useState(contact.name);

  const handlerChangeName = (e) => setName(e.target.value);
  const handlerChangePhone = (e) => setPhone(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, phone };
    onUpdateContact({ id, body });
    navigate('/contacts');
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='name' hidden>
          Name
        </Label>
        <Input
          value={name}
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
          type='tel'
          name='phone'
          pattern='(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})'
          title='Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +'
          required
          onChange={handlerChangePhone}
        />
      </FormGroup>

      <Button type='submit' variant='contained' color='primary'>
        Update contact
      </Button>
    </Form>
  );
};
const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateContact: (name, phone) =>
    dispatch(operations.updateContact(name, phone))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateView);
