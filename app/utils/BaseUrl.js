const BaseURL = () => {
  const { API_PROTOCOL, API_HOST, API_PORT } = process.env;
  const domain = 'http://13.232.213.255:5000';
  let baseURL = '/api';
  if (API_PROTOCOL && API_HOST) {
    baseURL = `${API_PROTOCOL}${API_HOST}${API_PORT ? `:${API_PORT}` : ''}${baseURL}`;
  }
  return `${domain}${baseURL}`;
};

export default BaseURL;
