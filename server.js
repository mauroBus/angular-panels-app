#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs = require('fs');

var publicDirectory = 'release'; // Edit this accordingly

/**
 *  Define the sample application.
 */
var MyApp = function() {
  //  Scope.
  var self = this;

  /*  ================================================================  */
  /*  Helper functions.                                                 */
  /*  ================================================================  */

  /**
   *  Set up server IP address and port # using env variables/defaults.
   */
  self.setupVariables = function() {
    //  Set the environment variables we need.
    self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
    self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

    if (!self.ipaddress) {
      //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
      //  allows us to run/test the app locally.
      console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
      self.ipaddress = "127.0.0.1";
    }
  };


  /**
   *  Populate the cache.
   */
  self.populateCache = function() {
    if (!self.zcache) {
      self.zcache = { 'index.html': '' };
    }

    //  Local cache for static content.
    self.zcache['index.html'] = fs.readFileSync('./release/index.html');
  };


  /**
   *  Retrieve entry (content) from cache.
   *  @param {string} key  Key identifying content to retrieve from cache.
   */
  self.cache_get = function(key) { return self.zcache[key]; };


  /**
   *  terminator === the termination handler
   *  Terminate server on receipt of the specified signal.
   *  @param {string} sig  Signal to terminate on.
   */
  self.terminator = function(sig){
    if (typeof sig === "string") {
     console.log('%s: Received %s - terminating sample app ...',
                 Date(Date.now()), sig);
     process.exit(1);
    }
    console.log('%s: Node server stopped.', Date(Date.now()) );
  };


  /**
   *  Setup termination handlers (for exit and a list of signals).
   */
  self.setupTerminationHandlers = function(){
    //  Process on exit and signals.
    process.on('exit', function() { self.terminator(); });

    // Removed 'SIGPIPE' from the list - bugz 852598.
    ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
     'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
    ].forEach(function(element, index, array) {
      process.on(element, function() { self.terminator(element); });
    });
  };


  /*  ================================================================  */
  /*  App server functions (main app logic here).                       */
  /*  ================================================================  */

  /**
   *  Create the routing table entries + handlers for the application.
   */
  self.createRoutes = function() {
    self.routes = { };

    self.routes['/asciimo'] = function(req, res) {
      var link = "http" + "://i.imgur.com/kmbjB.png";
      res.send("<"+"html"+"><"+"body"+"><"+"img src='" + link + "' />"+"<"+ "/"+"body"+">"+"<"+"/"+"html"+">");
    };

    self.routes['/'] = function(req, res) {
      res.setHeader('Content-Type', 'text/html');
      res.send(self.cache_get('index.html') );
    };
  };


  /**
   *  Initialize the server (express) and create the routes and register
   *  the handlers.
   */
  self.initializeServer = function() {
    self.createRoutes();
    self.app = express.createServer();

    //  Add handlers for the app (from the routes).
    for (var r in self.routes) {
      self.app.get(r, self.routes[r]);
    }
  };


  /**
   *  Initializes the sample application.
   */
  self.initialize = function() {
    self.setupVariables();
    self.setupTerminationHandlers();

    // Create Express server
    self.app = express.createServer();

    // Gzip content
    self.app.use(express.compress());

    // Browser Cache
    var oneDay = 86400000;
    self.app.use('/', express.static(__dirname + '/' + publicDirectory + '/', { maxAge: oneDay }));
  };


  /**
   *  Start the server (starts up the sample application).
   */
  self.start = function() {
    //  Start the app on the specific interface (and port).
    self.app.listen(self.port, self.ipaddress, function() {
      var msg = '%s: Node server started on %s:%d ...';
      console.log(msg, Date(Date.now()), self.ipaddress, self.port);
    });
  };

};

/* My Application.  */



/**
 *  main():  Main code.
 */
var myAppObj = new MyApp();
myAppObj.initialize();
myAppObj.start();
