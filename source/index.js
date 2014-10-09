var React = require('react'),
//  $ = require("jquery"),
  Main = require('./components/main');
//$(document).ready(function(){
  var mountPoint = document.querySelector('body');
  React.renderComponent( Main(null) , mountPoint );
//});

