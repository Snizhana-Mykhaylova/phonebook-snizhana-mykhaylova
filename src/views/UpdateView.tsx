import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/phonebook-operatios';

import UpdateForm from '../components/UpdateForm';

const UpdateView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  return <UpdateForm />;
};

export default UpdateView;
