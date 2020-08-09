export const GET_CANDIDATES = 'GET_CANDIDATES';
export const GET_CANDIDATE_SUCCESS = 'GET_CANDIDATE_SUCCESS';
export const GET_CANDIDATE_ERROR = 'GET_CANDIDATE_ERROR';

export const UPDATE_BRAND = 'UPDATE_BRAND';
export const UPDATE_BRAND_SUCCESS = 'UPDATE_BRAND_SUCCESS';
export const UPDATE_BRAND_ERROR = 'UPDATE_BRAND_ERROR';

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

export const getCandidateError = () => ({
  type: GET_CANDIDATE_ERROR
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

export const updateBrand = brandData => ({
  type: UPDATE_BRAND,
  payload: brandData
});

export const updateBrandSuccess = brandId => ({
  type: UPDATE_BRAND_SUCCESS,
  payload: brandId
});

export const updateBrandError = brandId => ({
  type: UPDATE_BRAND_ERROR,
  payload: brandId
});

export const loadHome = () => ({
  type: LOAD_HOME
})
