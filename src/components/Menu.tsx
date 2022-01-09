import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
        to='/'
        // exact
        // activeStyle={{
        //   backgroundColor: 'white',
        //   color: '#3f51b5'
        // }}
      >
        Home
      </NavLink>

      <NavLink
        to='/contacts'
        // activeStyle={{
        //   backgroundColor: 'white',
        //   color: '#3f51b5'
        // }}
      >
        Contacts
      </NavLink>
      <NavLink
        to='/about'
        // activeStyle={{
        //   backgroundColor: 'white',
        //   color: '#3f51b5'
        // }}
      >
        About
      </NavLink>
      <NavLink
        to='/404'
        // activeStyle={{
        //   backgroundColor: 'white',
        //   color: '#3f51b5'
        // }}
      >
        404
      </NavLink>
    </nav>
  );
};

export default Menu;
