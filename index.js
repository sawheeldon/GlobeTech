var React = require('react');
var ReactDOM = require('react-dom');

// array to store the images

var techLogos = ['../images/verge.png', '../images/mashable.png', '../images/Recode.svg.png', '../images/TechRadar.png'];

// loop for logo

var FrontLogos = function() {
    var outPut = "";
    for (var i = 0; i<techLogos.length; i++) {
        setTimeout(function(){techLogos(i)},100);
        outPut = techLogos[i];
    }
};





// function coinToss () {
//   // Randomly return either 'heads' or 'tails'.
//   return Math.random() < 0.5 ? 'heads' : 'tails';
// }

// var imageLogo = <img src={techLogos[coinToss()=='heads' ? 'mashable' : 'ars']} />;


//test to make sure React is working

var Test = React.createClass({
  render: function () {
    return ( 
    <div>
    <h1>Hello world, testing the React Link</h1>
    <img height="100" src={techLogos[FrontLogos()]} />
    </div>
    );
  }
});






document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Test />, document.getElementById('app'));
    // ReactDOM.render(imageLogo, document.getElementById('logo'));
});