var React = require('react');
var ReactDOM = require('react-dom');

// storing the logos in a global variable

var techLogos = {
  mashable:'../images/mashable.png',
  ars:'../images/Ars.svg.png',
  recode:'../images/recode.svg.png',
  verge:'../images/verge.png',
};

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var imageLogo = <img src={techLogos[coinToss()=='heads' ? 'mashable' : 'ars']} />;


//test to make sure React is working

var Test = React.createClass({
  render: function () {
    return <h1>Hello world, testing the React Link</h1>;
  }
});






document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Test />, document.getElementById('app'));
    ReactDOM.render(imageLogo, document.getElementById('logo'));
});