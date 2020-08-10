import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Table from '../Common/Table';

import { getAllCandidates } from '../../actions/candidate';

import { getCandidates, getCurrentUser } from '../../selectors/candidate';

const ViewDetail = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCandidates());
  }, []);

  const candidates = useSelector(state => getCandidates(state))
  const currentUser = useSelector(state => getCurrentUser(state))

  return (
    <div>
      <Table
        candidates={candidates}
        history={history}
        currentUser={currentUser}
      />
    </div>
  );
};

export default ViewDetail;
