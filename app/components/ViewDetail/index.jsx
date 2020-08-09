import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import Chart from './Chart';
import Table from '../Common/Table';

import { getAllCandidates } from '../../actions/candidate';

import { getCandidates } from '../../selectors/candidate';

const ViewDetail = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCandidates());
  }, []);

  const candidates = useSelector(state => getCandidates(state))
  console.log('candidates', candidates)
  return (
    <div>
      {/* <Chart /> */}
      <Table candidates={candidates} history={history} />
    </div>
  );
};

export default ViewDetail;
