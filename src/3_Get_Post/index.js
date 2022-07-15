/**
 развертывание сервера
 тестирование лучше проводить через Postman
 */

const http = require('http');
// const {request, response} = require('express');
const url = require('url');
const {parse} = require('querystring')

http.createServer((request, response) => {
  console.log('server work');
  if (request.method === 'GET') {
    let urlRequest = url.parse(request.url, true);
    console.log(urlRequest);
    response.end('good')
  }
  else {
    //Post
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    request.on('end', () => {
       console.log(body);
       let params = parse(body);
       console.log(params);
       response.end('ok');
    })

  }
}).listen(3000)

// console.log(urlRequest);
// Url {
//   protocol: null,
//       slashes: null,
//       auth: null,
//       host: null,
//       port: null,
//       hostname: null,
//       hash: null,
//       search: null,
//       query: [Object: null prototype] {},
//   pathname: '/favicon.ico',
//       path: '/favicon.ico',
//       href: '/favicon.ico'
// }



// запустить сервер через терминал - node index.js

