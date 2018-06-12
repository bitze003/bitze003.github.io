<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Favorite Movies</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css" />
</head>

<body>

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "9f27aad65c7f4c9aadb3c5baf39b9681",
  'q': "man falls"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

</body>
</html>
