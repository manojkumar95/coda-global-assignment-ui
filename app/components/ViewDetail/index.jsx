import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import Chart from './Chart';
import Table from '../Common/Table';

import { getBrand } from '../../actions/brand';

const ViewDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrand());
  }, []);

  return (
    <div>
      <Chart />
      <Table />
    </div>
  );
};

export default ViewDetail;
