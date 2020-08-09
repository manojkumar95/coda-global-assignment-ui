import React, { useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { getCandidateById as fetchCandidateById, voteForCandidate } from '../../actions/candidate';

import { getCandidateById, getCurrentUser } from '../../selectors/candidate';
import 'styles/ViewCandidate.scss';

const ViewCandidate = (props) => {
  console.log('props', props)
  const candidateId = _.get(props, 'match.params.candidateId');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandidateById(candidateId));
  }, []);



  const candidateDetails = useSelector((state) => getCandidateById(state, candidateId))
  const currentUser = useSelector(state => getCurrentUser(state))

  const voteForCandidateByUserId = () => {
    dispatch(voteForCandidate({
      userId: currentUser.userId,
      candidateId: candidateId
    }))
  }

  return (
    <div className="card-container">
      <div className="card">
        {/* <Chart /> */}
        {/* <Table candidates={candidates} history={history} /> */}
        <div class="card-content">

          <div className="card-block">
            <span className="card-title">Candidate Id:</span>
            <span className="card-text">{candidateDetails._id}</span>
          </div>
          <div className="card-block">
            <span className="card-title">Name:</span>
            <span className="card-text">{candidateDetails.name}</span>
          </div>
          <div className="card-block">
            <span className="card-title"> Number Of Votes:</span>
            <span className="card-text">{candidateDetails.numberOfVotes}</span>
          </div>
          <div className="card-block">
            <span className="card-title">Expertise Level:</span>
            <span className="card-text">{candidateDetails.expertiseLevel}</span>
          </div>
          <div className="card-block">
            <span className="card-title">Created At:</span>
            <span className="card-text">{candidateDetails.createdAt}</span>
          </div>
          <div className="card-block">
            <span className="card-title">Number Of Challenges Solved:</span>
            <span className="card-text">{candidateDetails.noOfChallengesSolved}</span>
          </div>
          <div className="btn-section">
            <button className={classNames('login-btn', { 'disabled': currentUser.isVoted })} type="submit" onClick={voteForCandidateByUserId}>
              VOTE FOR CANDIDATE
            </button>
            {
              currentUser.isVoted && <div className="message">
                User has already voted!
                </div>
            }
          </div>
          {/* <div>
                <span>Candidate Name</span>
                <span>{candidateDetails.noOfChallengesSolved}</span>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewCandidate;
