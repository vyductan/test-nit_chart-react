import Chart from './components/Chart';
import React from 'react';

const A = () => {
  return (
    <>
      <Chart />
      <iframe src='index.html' width={500} height={500} />
    </>
  );
};

export default A;
