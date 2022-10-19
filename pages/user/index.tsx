import type { NextPage } from 'next';
import CreateUser from '../../components/CreateUser';
import TableUser from '../../components/TableUser';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchData } from '../../redux/user/user.slice';

const User: NextPage = ({}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      <CreateUser />
      <TableUser />
    </>
  );
};

export default User;
