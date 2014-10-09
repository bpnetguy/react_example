/** @jsx React.DOM */
var React = require("react");
var TableHeader = React.createClass({
  render: function(){
    var headers = this.props.data.map(function(headerName){
      return(
        <span className="cell">{headerName}</span>
        );
    });
    return(
      <div className="row header">
      {headers} 
      </div>
    );
  }
});
var Table = React.createClass({
  getInitialState: function() {                                                                                                                    
      var table = [
         {
            headerName: "header 1",
            name: "Row 1",
            description: "Description 1"
         },
         {   
            headerName: "header 2",
            name: "Row 2",
            description: "Description 2"
         }
      ];
      return {data: table};
  },
  render: function() {
    var headers=[];
    var rows = this.state.data.map(function(row, index) {
      headers.push(row.headerName || "");
      return ( 
        <div className="row">
            <span className="cell">{row.name}</span>
           <span className="cell">{row.description}</span>
        </div>
      );
    });

    
    return (
      <div className="table">
        <TableHeader data={headers}/>
        {rows}
      </div>
    );
  }
});

module.exports = Table;
