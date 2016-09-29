var React = require('react');
var ReactDOM = require('react-dom');


var Test = React.createClass({
  render: function () {
    return <h1>Hello world, testing the React Link</h1>;
  }
});






document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Test />, document.getElementById('app'));
});