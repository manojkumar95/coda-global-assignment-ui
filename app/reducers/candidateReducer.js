import {
  GET_CANDIDATES,
  GET_CANDIDATE_SUCCESS,
  GET_CANDIDATE_ERROR,
  UPDATE_CANDIDATE,
  UPDATE_CANDIDATE_SUCCESS,
  UPDATE_CANDIDATE_ERROR,
  GET_CANDIDATE_BY_ID,
  GET_CANDIDATE_BY_ID_SUCCESS
} from '../actions/candidate';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from '../actions/login';

const initialState = {
  currentUser: {},
  candidates: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATES:
      return {
        ...state,
        loading: true
      }
    case GET_CANDIDATE_SUCCESS:
      return {
        ...state,
        candidates: action.response.candidates
      }
    case GET_CANDIDATE_ERROR:
      return {
        ...state,
        candidateError: action.error,
        loading: false
      }
    case GET_CANDIDATE_BY_ID:
      return {
        ...state,
        loading: true
      }
    case GET_CANDIDATE_BY_ID_SUCCESS:
      return {
        ...state,
        candidate: action.response
      }
    case LOGIN_SUCCESS:
      const {
        userId, name, authToken, isVoted, isAdmin
      } = action.payload;
      return {
        ...state,
        currentUser: {
          name: name,
          userId,
          authToken,
          isVoted,
          isAdmin
        }
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.err,
        loading: false
      };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
        return state;
  }
};
