# node-kissmetrics

KISSmetrics client for node.js

## Usage

```js
// create a new KM Client instance:
var Kissmetrics = require('kissmetrics');
var kmClient = new Kissmetrics({ key: KM_KEY });

// record an event
kmClient.event('blah@example.com', 'signed up');
```

For more information / documentation on how to use the methods, read the source.
All methods are accompanied by jsDocs.

## Documentation

### KissmetricsClient(options)

KISSmetrics REST client constructor.

@param options {Object} The options object defining the REST client to
instantiate. Its possible parameters are :

@param key {String} your KISSmetrics API key.

@param endpoint {String} (optional) The tracker endpoint to which the client
connects to. Defaults to 'https://trk.kissmetrics.com'

#### client.set(person, properties, [callback])

Sets properties on a person without recording an event by making a request.

@param person {String} The identity of the person.

This is limited to 255 chars and all commas (,), and colons (:) will
automatically be changed to spaces (KISSmetrics will convert foo:bar,baz to
foo bar baz).

@param properties {Object} An object containing the properties to be set on
`person`.

@param callback {Function} A function of the form `function(err)`.
The default callback logs erroneous requests to stderr.

#### client.alias(person, aliases, [callback])

Aliases the user identified by `person` with `aliases`.

@param person {String} The identity of the person.

This is limited to 255 chars and all commas (,), and colons (:) will
automatically be changed to spaces (KISSmetrics will convert foo:bar,baz to
foo bar baz).

@param alias | aliases {String|Array} The alias to apply to the person.

This is limited to 255 chars and all commas (,), and colons (:) will
automatically be changed to spaces (KISSmetrics will convert foo:bar,baz to
foo bar baz).

Can either be a string or an array of string if multiple alias are supplied.

@param callback {Function} A callback of the form `function(err)`.
The default callback logs erroneous requests to stderr.

#### client.event(person, event, properties, [callback])

Records `event` for `person. Also sets `properties` on the person if
specified.

@param person {String} The identity of the person doing the event.

This is limited to 255 chars and all commas (,), and colons (:) will
automatically be changed to spaces (KISSmetrics will convert foo:bar,baz to
foo bar baz).

@param event {String} The name of the event you want to record.

This is limited to 255 chars and all commas (,), and colons (:) will
automatically be changed to spaces (KISSmetrics will convert foo:bar,baz to
foo bar baz).

@param properties {Object} (optional) An object containing the properties to
be set on `person`.

@param callback {Function} A function of the form `function(err)`.
The default callback logs erroneous requests to stderr.

#### client.request(pathname, params, [callback])

Performs the given request on the KISSmetrics tracker host.

@param pathname {String} The path section of the URL, that comes after the
host and before the query, including the initial slash if present.

@param params {Object}

@param callback {Function} A callback of the form `function(res)`.
The default callback logs erroneous requests to stderr.
