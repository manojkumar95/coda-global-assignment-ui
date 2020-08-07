import {
  fromJS
} from 'immutable';
import {
  GET_BRAND,
  GET_BRAND_SUCCESS,
  GET_BRAND_ERROR,
  UPDATE_BRAND,
  UPDATE_BRAND_SUCCESS,
  UPDATE_BRAND_ERROR
} from '../actions/brand';

import {
  LOGIN_SUCCESS
} from '../actions/login';

const initialState = fromJS({
  brandId: '',
  firstName: '',
  lastName: '',
  brandError: ''
});

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRAND:
      return state.set('loading', true);
    case GET_BRAND_SUCCESS:
      return state
        .set('brandId', action.brand.brandId)
        .set('firstName', action.brand.firstName)
        .set('lastName', action.brand.lastName)
        .set('phoneNumber', action.brand.phoneNumber)
        .set('loading', false);
    case GET_BRAND_ERROR:
      return state
        .set('brandError', action.error)
        .set('loading', false);
    case UPDATE_BRAND:
      return state.set('loading', true);
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
      return state
        .set('companyName', action.payload.companyName)
        .set('displayName', action.payload.displayName)
        .set('email', action.payload.email)
        .set('brandId', action.payload.id)
        .set('expires', action.payload.expires)
        .set('isVerified', action.payload.isVerified)
        .set('token', action.payload.token);
    default:
      return state;
  }
};

export default brandReducer;
