const WebAPIRequest         = require('./requests/web-request');
const HttpManager           = require('./http');

function VerkadaAPI(credentials) {
  this._credentials = credentials || {};
}

VerkadaAPI.prototype = {
  setCredentials: function(credentials) {
    for(var key in credentials) {
      if(credentials.hasOwnProperty(key)) {
        this._credentials[key] = credentials[key];
      }
    }
  },

  _setCredential: function(credentialKey, value) {
    this._credentials = this._credentials || {};
    this._credentials[credentialKey] = value;
  },

  _getCredential: function(credentialKey) {
    if(!this._credentials)
      return;
    else 
      return this._credentials[credentialKey];
  },

  _resetCredential: function(credentialKey) {
    if(!this._credentials)
      return;
    else 
      this._credentials[credentialKey] = null;
  },

  getCreds: function() {
    return this._credentials;
  },

  resetCreds: function() {
    this._credentials = null;
  },

  setOrganizationId: function(organizationId) {
    this._setCredential('org_id', organizationId);
  },

  getOrganizationId: function() {
    return this._getCredential('org_id');
  },

  resetOrganizationId: function() {
    this._resetCredential('org_id');
  },

  setAPIKey: function(apiKey) {
    this._setCredential('x-api-key', apiKey);
  },

  getAPIKey: function() {
    return this._getCredential('x-api-key');
  },

  resetAPIKey: function() {
    this._resetCredential('x-api-key');
  },

  getCameraAlerts: function(options, callback) {
    return WebAPIRequest.builder(this.getAPIKey())
      .withPath(`/cameras/v1/alerts?org_id=${this.getOrganizationId()}`)
      .withQueryParameters(options)
      .build()
      .execute(HttpManager.get, callback)
  }
}

module.exports = VerkadaAPI;