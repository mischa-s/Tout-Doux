var request = require('supertest');
var app = require('../app');
var test = require('tape');


test('get status code 200 from index', function(t) {
  request(app)
    .get('/')
    .expect(200)
    .end(function(err, res) {
      t.false(err)
      t.end()
    })
})
