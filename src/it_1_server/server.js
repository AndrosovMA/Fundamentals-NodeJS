const http = require('http');

let requestCount = 0;

const server = http.createServer((request, response) => {
  //колбэк функция будет вызываться каждый раз как будет приходить response

  if (request.url !== '/favicon.ico') {
    requestCount++;
  }
  console.log(request.url);

  switch (request.url) {
    case '/first':
      response.write('first page');
      break;
    case '/second':
      response.write('second page');
      break;
    default:
      response.write('page not found');
  }

  response.write('  Back-end ' + requestCount);
  response.end();
});

server.listen(3003);
