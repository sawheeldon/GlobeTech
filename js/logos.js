var React = require('react');
var ReactDOM = require('react-dom');

// array to store the images

var techLogos = ['../images/verge.png', '../images/mashable.png', '../images/Recode.svg.png', '../images/TechRadar.png'];

// loop for logos

var FrontLogos = function() {
    var outPut = "";
    for (var i = 0; i<techLogos.length; i++) {
        setTimeout(function(){techLogos(i)},100);
        outPut = techLogos[i];
    }
};

module.exports = FrontLogos;