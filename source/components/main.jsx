/** @jsx React.DOM */
var React = require('react'),
      Table = require('./table');
var css = require("!css!less!./main.less");
var Main = React.createClass({
    render: function() {
      return (
        <div>
          <style dangerouslySetInnerHTML={{__html: css}} />
          <Table />
        </div>
      );
                      
     }

});

module.exports = Main;
