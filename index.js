/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-fontello',

  treeFor: function (name) {
    if (name === 'vendor') {
      // Map 'node_modules' to 'vendor', so that we can import Font Awesome assets later.
      console.log(__dirname);
      return this.treeGenerator(path.join(__dirname, 'vendor'));
    }
    /*else if (name === 'app') {
     return this.treeGenerator(path.join(__dirname, 'app-addon'));
     }*/
  },

  included: function included(app) {
    this.app = app;
    var options = this.app.options.emberCliFontello || {includeFontelloAssets: true};
    if (options.includeFontelloAssets) {
      app.import('vendor/fontello/fontello.css');
      app.import('vendor/fontello/font/fontello.ttf', {
        destDir: 'font'
      });
      app.import('vendor/fontello/font/fontello.eot', {
        destDir: 'font'
      });
      app.import('vendor/fontello/font/fontello.svg', {
        destDir: 'font'
      });
      app.import('vendor/fontello/font/fontello.woff', {
        destDir: 'font'
      });
    }
  }
};
