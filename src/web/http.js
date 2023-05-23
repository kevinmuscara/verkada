const superagent = require('superagent'); 
let HttpManager = {};

let _getParametersFromRequest = function(request) {
  var options = {};

  if(request.getQueryParameters()) {
    options.query = request.getQueryParameters();
  }

  if(request.getHeaders() && request.getHeaders()['Content-Type'] === 'application/json') {
    options.data = JSON.stringify(request.getBodyParameters());
  } else if(request.getBodyParameters()) {
    options.data = request.getBodyParameters();
  }

  if(request.getHeaders()) {
    options.headers = request.getHeaders();
  }

  return options;
}

HttpManager._makeRequest = function(method, options, uri, callback) {
  let req = method.bind(superagent)(uri);

  if(options.query) req.query(options.query);
  if (options.headers) req.set(options.headers);
  if (options.data) req.send(options.data);
  
  req.end(function(err, response) {
    if(err) {
      return callback(err);
    }

    return callback(null, {
      body: response.body,
      headers: response.headers,
      statusCode: response.statusCode
    });
  });
};

HttpManager.get = function(request, callback) {
  var options = _getParametersFromRequest(request);
  var method = superagent.get;

  HttpManager._makeRequest(method, options, request.getURI(), callback);
};

HttpManager.post = function(request, callback) {
  var options = _getParametersFromRequest(request);
  var method = superagent.post;

  HttpManager._makeRequest(method, options, request.getURI(), callback);
};

HttpManager.del = function(request, callback) {
  var options = _getParametersFromRequest(request);
  var method = superagent.del;

  HttpManager._makeRequest(method, options, request.getURI(), callback);
};

HttpManager.put = function(request, callback) {
  var options = _getParametersFromRequest(request);
  var method = superagent.put;

  HttpManager._makeRequest(method, options, request.getURI(), callback);
};

module.exports = HttpManager;