import { NavLink } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const MobileMenu = () => {
  return (
    <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav>
        Menu
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <NavLink to='/'>Home</NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to='/contacts'>Contacts</NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to='/about'>About</NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to='/404'>404</NavLink>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default MobileMenu;
