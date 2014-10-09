/** @jsx React.DOM */
var React = require('react'),
      Table = require('./table');

var Main = React.createClass({
    render: function() {
      return (
        <div>
          <Table />
        </div>
      );
                      
     }

});

module.exports = Main;
