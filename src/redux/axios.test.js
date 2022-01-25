import axios from 'axios';
import operations from './phonebook-operations';
jest.mock('axios');

describe('fetchData', () => {
  it('fetches successfully data from an API', async () => {
    const baseURL = 'https://test-bakend-json-server.herokuapp.com';
    const data = [
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
          street: 'Rex Trail',
          suite: 'Suite 280',
          city: 'Howemouth',
          zipcode: '58804-1099',
          geo: {
            lat: '24.8918',
            lng: '21.8984'
          }
        },
        phone: '+32656565897',
        website: 'elvis.io',
        company: {
          name: 'Johns Group',
          catchPhrase: 'Configurable multimedia task-force',
          bs: 'generate enterprise e-tailers'
        }
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
          street: 'Ellsworth Summit',
          suite: 'Suite 729',
          city: 'Aliyaview',
          zipcode: '45169',
          geo: {
            lat: '-14.3990',
            lng: '-120.7677'
          }
        },
        phone: '+32656565807',
        website: 'jacynthe.com',
        company: {
          name: 'Abernathy Group',
          catchPhrase: 'Implemented secondary concept',
          bs: 'e-enable extensible e-tailers'
        }
      },
      {
        id: 9,
        name: 'Glenna Reicheth',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
          street: 'Dayna Park',
          suite: 'Suite 449',
          city: 'Bartholomebury',
          zipcode: '76495-3109',
          geo: {
            lat: '24.6463',
            lng: '-168.8889'
          }
        },
        phone: '+380506468355',
        website: 'conrad.com',
        company: {
          name: 'Yost and Sons',
          catchPhrase: 'Switchable contextually-based project',
          bs: 'aggregate real-time technologies'
        }
      }
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(operations.fetchContact()).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/contacts`);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(operations.fetchContact()).rejects.toThrow(errorMessage);
  });
});

export default {};
