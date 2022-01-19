import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/phonebook-operations';

import UpdateForm from '../components/UpdateFrom';

const UpdateView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  return <UpdateForm />;
};

export default UpdateView;
