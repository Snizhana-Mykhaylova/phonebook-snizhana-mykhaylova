const contacts = [
  { id: '1', name: 'Snizhana', phone: '+380506468344' },
  { id: '2', name: 'Snizhana2', phone: '+380506468355' }
];
const axios = require('axios');
const fetchContact = axios
  .get('/contacts')
  .then(({ data }) => data)
  .catch((err) => err.message);

test('the data is defined', () => {
  return fetchContact.then((data) => {
    expect(data).toBeDefined;
  });
});
