var React = require('react');
var ReactDOM = require('react-dom');
var FrontLogos = require('../logos.js');

//test to make sure React is working

var TitlePage = React.createClass({
  render: function () {
    return ( 
    <div>
    <h1>Hello world, testing the React Link</h1>
    <img height="100" src={FrontLogos} />
    </div>
    );
  }
});






document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<TitlePage />, document.getElementById('app'));
    // ReactDOM.render(imageLogo, document.getElementById('logo'));
});