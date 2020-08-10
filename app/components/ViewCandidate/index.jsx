import React, { useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { getCandidateById as fetchCandidateById, voteForCandidate } from '../../actions/candidate';

import { getCandidateById, getCurrentUser } from '../../selectors/candidate';
import 'styles/ViewCandidate.scss';

const ViewCandidate = (props) => {
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

  const widthClassNames = {
    1: 'width20',
    2: 'width40',
    3: 'width60',
    4: 'width80',
    5: 'width100'
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">

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
          <div className="card-block">
            <div className="card-title">Skills:</div>
            {/* <span className="card-text">{candidateDetails.noOfChallengesSolved}</span> */}
            {
              _.keys(candidateDetails.expertiseIn).map(language => (
                <div className="skill-wrap" key={language}>
                  <div className="card-title skill-title">{language}</div>
                  <span className="skill-container">

                    <div className={classNames('skills', `${widthClassNames[candidateDetails.expertiseIn[language]]}`)}>{candidateDetails.expertiseIn[language]}</div>
                  </span>
                </div>
              ))
            }
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
