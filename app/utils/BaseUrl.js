const BaseURL = () => {
  const { API_PROTOCOL, API_HOST, API_PORT } = process.env;
  const domain = 'https://lit-shore-08352.herokuapp.com';
  let baseURL = '/api';
  if (API_PROTOCOL && API_HOST) {
    baseURL = `${API_PROTOCOL}${API_HOST}${API_PORT ? `:${API_PORT}` : ''}${baseURL}`;
  }
  return `${domain}${baseURL}`;
};

export default BaseURL;
