/** @jsx React.DOM */
var React = require("react");
var Table = React.createClass({
  getInitialState: function() {                                                                                                                    
      var table = [
         {
            name: "Row 1",
            description: "Description 1"
         },
         {
            name: "Row 2",
            description: "Description 2"
         }
      ];
      return {data: table};
  },
  render: function() {
    var rows = this.state.data.map(function(row, index) {
      return ( 
        <div class="row">
            <span class="cell">{row.name}</span>
           <span class="cell">{row.description}</span>
        </div>
      );
    });
    return (
      <div class="table">
        {rows}
      </div>
    );
  }
});

module.exports = Table;
