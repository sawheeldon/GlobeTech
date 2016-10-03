var React = require('react');
var ReactDOM = require('react-dom');

// array to store the images

var techLogos =  ['./images/verge.png', './images/mashable.png', './images/Recode.png', './images/TechRadar.png'];

// loop for logos

var FrontLogos = function(techLogos) {
    var outPut = "";
    for (var i = 0; i<techLogos.length; i++) {
        setTimeout(function(){FrontLogos(i)},1000);
        outPut = techLogos[i];
    }
    // return techLogos[0];
    return outPut;
};



module.exports = FrontLogos(techLogos);
// module.exports = techLogos;