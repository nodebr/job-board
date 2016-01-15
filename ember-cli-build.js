/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/uikit/js/uikit.min.js');

  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {
    destDir: 'fonts/',
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts/',
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', {
    destDir: 'fonts/',
  });

  return app.toTree();
};
