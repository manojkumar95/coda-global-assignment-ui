export const GET_CANDIDATES = 'GET_CANDIDATES';
export const GET_CANDIDATE_SUCCESS = 'GET_CANDIDATE_SUCCESS';
export const GET_CANDIDATE_ERROR = 'GET_CANDIDATE_ERROR';

export const UPDATE_CANDIDATE = 'UPDATE_CANDIDATE';
export const UPDATE_CANDIDATE_SUCCESS = 'UPDATE_CANDIDATE_SUCCESS';
export const UPDATE_CANDIDATE_ERROR = 'UPDATE_CANDIDATE_ERROR';

export const DELETE_CANDIDATE = 'DELETE_CANDIDATE';

export const GET_CANDIDATE_BY_ID = 'GET_CANDIDATE_BY_ID';
export const GET_CANDIDATE_BY_ID_SUCCESS = 'GET_CANDIDATE_BY_ID_SUCCESS';

export const VOTE_FOR_CANDIDATE = 'VOTE_FOR_CANDIDATE';
export const VOTE_FOR_CANDIDATE_SUCCESS = 'VOTE_FOR_CANDIDATE_SUCCESS';

export const LOAD_HOME = 'LOAD_HOME';

export const getAllCandidates = () => ({
  type: GET_CANDIDATES
});

export const getCandidateSuccess = response => ({
  type: GET_CANDIDATE_SUCCESS,
  response
});

export const getCandidateError = error => ({
  type: GET_CANDIDATE_ERROR,
  error
});

export const getCandidateById = candidateId => ({
  type: GET_CANDIDATE_BY_ID,
  payload: candidateId
});

export const getCandidateByIdSuccess = response => ({
  type: GET_CANDIDATE_BY_ID_SUCCESS,
  response
});

export const voteForCandidate = payload => ({
  type: VOTE_FOR_CANDIDATE,
  payload
});

export const voteForCandidateSuccess = response => ({
  type: VOTE_FOR_CANDIDATE_SUCCESS,
  response
});

export const updateCandidate = candidateData => ({
  type: UPDATE_CANDIDATE,
  payload: candidateData
});

export const deleteCandidate = candidateId => ({
  type: DELETE_CANDIDATE,
  payload: candidateId
});

export const updateCandidateSuccess = candidateId => ({
  type: UPDATE_CANDIDATE_SUCCESS,
  payload: candidateId
});

export const updateCandidateError = candidateId => ({
  type: UPDATE_CANDIDATE_ERROR,
  payload: candidateId
});

export const loadHome = () => ({
  type: LOAD_HOME
})
