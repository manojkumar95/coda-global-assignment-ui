import {
  GET_CANDIDATES,
  GET_CANDIDATE_SUCCESS,
  GET_CANDIDATE_ERROR,
  UPDATE_BRAND,
  UPDATE_BRAND_SUCCESS,
  UPDATE_BRAND_ERROR,
  GET_CANDIDATE_BY_ID,
  GET_CANDIDATE_BY_ID_SUCCESS
} from '../actions/candidate';

import {
  LOGIN_SUCCESS
} from '../actions/login';

const initialState = {
  brandId: '',
  firstName: '',
  lastName: '',
  brandError: ''
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
      return state
        .set('brandError', action.error)
        .set('loading', false);
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
    case GET_CANDIDATE_ERROR:
      return {
        ...state,
        brandError: action.error,
          loading: false
      }
    case UPDATE_BRAND:
      return state
        .set('loading', true);
    case UPDATE_BRAND_SUCCESS:
      return state
        .set('brandId', action.brand.brand)
        .set('firstName', action.brand.firstName)
        .set('lastName', action.brand.lastName)
        .set('phoneNumber', action.brand.phoneNumber)
        .set('loading', false);
    case UPDATE_BRAND_ERROR:
      return state
        .set('brandError', action.error)
        .set('loading', false);
    case LOGIN_SUCCESS:
      console.log('action here', action);
      const {
        userId, name, authToken, isVoted
      } = action.payload;
      return {
        ...state,
        currentUser: {
          name: name,
          userId,
          authToken,
          isVoted
        }
      }
    default:
        return state;
  }
};
