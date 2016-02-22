var formFill = function() {
  var accessToken = getAccessToken(),
      request_url = "https://my.mlh.io/api/v1/user";

  request_url += "?access_token=" + accessToken;

  $.get(request_url, function(response, status) {
    console.log(response.data['email']);
  });
};

var getAccessToken = function() {
  var parameters = window.location.href.split(/[&#]/);
  if (parameters.length > 1)
    var access_token = parameters[1].replace('access_token=', '');

  console.log(access_token);
  return access_token;
};

formFill();