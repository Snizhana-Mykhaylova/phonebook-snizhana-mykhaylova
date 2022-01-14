import { Input } from 'reactstrap';

import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/phonebook-actions';
import * as selectors from '../redux/phonebook-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const onChange = useCallback(
    (event) => dispatch(actions.filterChange(event.target.value)),
    [dispatch]
  );

  return (
    <Input
      className='filter'
      placeholder='find contact by name'
      value={value}
      onChange={onChange}
    />
  );
};

export default Filter;
