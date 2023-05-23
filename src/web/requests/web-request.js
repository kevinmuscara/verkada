const Request = require('./base-request');

const DEFAULT_BASE   = 'api.verkada.com';
const DEFAULT_PORT   = '443';
const DEFAULT_SCHEME = 'https';

module.exports.builder = (x_api_key) => {
  return Request.builder()
    .withHost(DEFAULT_BASE)
    .withPort(DEFAULT_PORT)
    .withScheme(DEFAULT_SCHEME)
    .withAuth(x_api_key);
};