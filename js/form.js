var formFill = function() {
  var accessToken = getAccessToken(),
      request_url = "https://my.mlh.io/api/v1/user";

  if (hasAccessToken()) {
    request_url += "?access_token=" + accessToken;

    $.get(request_url, function(response, status) {
      console.log(response.data);
      redirectPage(response.data);
    });
  }
};

var redirectPage = function(data) {
  var typeform_url = "/typeform.html?";
  for (var x in data){
    if (x === 'school'){
      typeform_url += '&school' + data[x]['name'];
    } else {
      typeform_url += '&' + x + '=' + data[x];
    }
    console.log(typeform_url);
    window.location.href = typeform_url;
  }
}

var getAccessToken = function() {
  var access_token;

  if (hasAccessToken()) {
    access_token = window.location.href.split(/[&#]/).replace('access_token=', '');
  }

  console.log(access_token);
  return access_token;
};

var hasAccessToken = function() {
  return (window.location.href.indexOf('access_token') != -1);
}

formFill();