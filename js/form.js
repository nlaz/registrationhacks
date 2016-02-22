var formFill = function() {
  var accessToken = getAccessToken();
};

var getAccessToken = function() {
  var parameters = window.location.href.split(/[&#]/);
  if (parameters.length > 0)
    var access_token = parameters[1].replace('access_token=', '');

  console.log(access_token);
  return access_token;
};

formFill();