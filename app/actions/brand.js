export const GET_BRAND = 'GET_BRAND';
export const GET_BRAND_SUCCESS = 'GET_BRAND_SUCCESS';
export const GET_BRAND_ERROR = 'GET_BRAND_ERROR';

export const UPDATE_BRAND = 'UPDATE_BRAND';
export const UPDATE_BRAND_SUCCESS = 'UPDATE_BRAND_SUCCESS';
export const UPDATE_BRAND_ERROR = 'UPDATE_BRAND_ERROR';

export const getBrand = brandId => ({
  type: GET_BRAND,
  payload: brandId
});

export const getBrandSuccess = brandId => ({
  type: GET_BRAND_SUCCESS,
  payload: brandId
});

export const getBrandError = brandId => ({
  type: GET_BRAND_ERROR,
  payload: brandId
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
