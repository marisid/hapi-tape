const server = require('../src/server.js')
const tape = require('tape')

tape('Check if the server is running', (t) => {
  server.start(err => {
    if (err) { t.error(err); }
    else {t.pass('Pass')};
    server.stop();
    t.end();
  });
})

tape('Check successful route', (t) => {
  var options = {
    method: 'GET',
    url: '/'
  };
  // inject --> starts and stops the server by default
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'testing for status 200');
    t.equal(res.payload, 'Hello world!', 'testing for response body');
    t.end();
  });
});

tape('Check failing route', (t) => {
  var options = {
    method: 'GET',
    url: '/',
    headers: {'content-type' : 'text'}
  }
  // inject --> starts and stops the server by default
  server.inject(options, (res) => {
    t.equal(res.statusCode, 400, 'testing for header');
    t.end();
  })
})
