/* global $ */
var React = require('react');
var ReactDOM = require('react-dom');
var Request = require('superagent');
var redux = require('redux');
// var fetch = require('node-fetch');
var fetch  = require('isomorphic-fetch');

// Api call from TechCrunch

// var TechCrunch = function (data) {
//     return function (data) {
//         var url = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035';
//         $.ajax({
//              type:'GET',
//              url:url ,
//              success: function(data) {
//                  console.log("success"data);
//              };
//         });
       
//     },
// }

var TechCrunch = function (data) {
    return function() {
        var url = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035';
        return fetch(url).then(function(response) {
            console.log(response);
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
    };
};
    

module.exports = TechCrunch;
