/*global describe:false, it:false, before:false */
var Kissmetrics = require('../');

var TEST_PORT = 50458;

describe("Kissmetrics", function() {
  var server;
  var kmClient;
  before(function(done) {
    kmClient = new Kissmetrics({
      key: "blah",
      endpoint: "http://localhost:" + TEST_PORT,
    });
    server = require('http').createServer(function(req, resp) {
      resp.statusCode = 200;
      resp.end();
    });
    server.listen(TEST_PORT, done);
  });
  it("set", function(done) {
    kmClient.set('person', {"foo": "bar"}, done);
  });
  it("alias", function(done) {
    kmClient.alias('person2', ['alias1', 'alias2'], done);
  });
  it("event", function(done) {
    kmClient.event('person3', "event name", done);
  });
  it("event with properties", function(done) {
    kmClient.event('person3', "event name", {"hi": "yes"}, done);
  });
});
