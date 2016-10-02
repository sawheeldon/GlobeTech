/* global $ */
var React = require('react');
var ReactDOM = require('react-dom');
var Request = require('superagent');

// Api call from TechCrunch

var TechCrunch = function (data) {
    var URL = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035';
    return $.getJSON(URL)};

module.exports = TechCrunch;
