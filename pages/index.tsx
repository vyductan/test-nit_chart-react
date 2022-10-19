import { AutorenewOutlined } from '@mui/icons-material';
import Chart from './components/Chart';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Chart />
      <iframe src='index.html' width={500} height={500} />
    </>
  );
};

export default Home;
