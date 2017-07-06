var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var path = require('path');
var fs = require("fs");
var jsonObj = JSON.parse(fs.readFileSync('./package.json'));
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var env = process.env.NODE_ENV;

var _externals = function() {
  var manifest = require('./package.json');
  var dependencies = manifest.dependencies;
  var externals = {};
  for (var p in dependencies) {
      externals[p] = 'commonjs ' + p;
  }

  return externals;
}

var config = {
  entry : './src/index.js',
  module:{
    loaders:[
      {
        test: /\.js?$/,
        loader:'babel-loader',
        query:{
          presets:[
            "es2015",
            "stage-0",
            "react"
          ]
        },
        exclude: path.join(__dirname,"/node_modules/"),
        include: path.join(__dirname,"src")
      }
    ]
  },
  output: {
    path: path.resolve(__dirname,`lib`),
    filename: 'server.js'
  },
  node:{
    console : true,
    __filename : true,
    __dirname : true
  },
  target :'node',
  _externals : _externals()
};

module.exports = config;