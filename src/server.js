const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 4000
})

server.route({
  path: '/',
  method: 'GET',
  handler: (request,reply) => {
    if (request.headers['content-type'] === 'text'){reply().code(400)}
    else {reply('Hello world!')}
  }
})

module.exports = server;
