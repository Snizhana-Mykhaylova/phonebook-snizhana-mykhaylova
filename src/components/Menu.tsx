import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const Menu = () => {
  return (
    <Nav>
      <NavItem className='menu-item '>
        <NavLink to='/'>Home</NavLink>
      </NavItem>

      <NavItem className='menu-item'>
        <NavLink to='/contacts'>Contacts</NavLink>
      </NavItem>

      <NavItem className='menu-item'>
        <NavLink to='/about'>About</NavLink>
      </NavItem>

      <NavItem className='menu-item'>
        <NavLink to='/404'>404</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Menu;
