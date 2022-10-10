import type { NextPage } from 'next';
import CreateUser from '../components/CreateUser';
import TableUser from '../components/TableUser';

const Home: NextPage = ({}) => {
  return <>
  <CreateUser />
  <TableUser />
  </>;

};

export default Home;
