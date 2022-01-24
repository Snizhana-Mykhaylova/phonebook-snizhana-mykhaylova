const { contacts } = require('./data-contacts');

const mockGetAll = jest.fn(() => {
  return {
    contacts
  };
});

const mockGetById = jest.fn((contactId) => {
  const [contact] = contacts.filter(
    (contact) => String(contact._id) === String(contactId)
  );
  return contact;
});

const mockCreate = jest.fn((body) => {
  contacts.push({ ...body, _id: '5555afe2b111ab18f74f0' });
  return { ...body, _id: '5555afe2b111ab18f74f0' };
});

const mockRemove = jest.fn((contactId) => {
  const index = contacts.findIndex(
    (contact) => String(contact._id) === String(contactId)
  );
  if (index !== -1) {
    const [contact] = contacts.splice(index, 1);
    return contact;
  }
  return null;
});

const mockUpdate = jest.fn((contactId, body) => {
  const [contact] = contacts.filter(
    (contact) => String(contact._id) === String(contactId)
  );
  if (contact) {
    contact.name = body.name;
  }
  return contact;
});

module.exports = {
  mockGetAll,
  mockGetById,
  mockCreate,
  mockRemove,
  mockUpdate
};
