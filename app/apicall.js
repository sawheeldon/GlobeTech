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

// var TechCrunch = function (data) {
//     return function() {
//         var url = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035';
//         return fetch(url).then(function(response) {
//             console.log(response);
//             if (response.status < 200 || response.status >= 300) {
//                 var error = new Error(response.statusText)
//                 error.response = response
//                 throw error;
//             }
//             return response;
//         })
//         .then(function(response) {
//             return response.json();
//         })
//     };
// };
    

// module.exports = TechCrunch;

var TechCrunchApi = function () {
    
            //news from Tech Crunch

            var TechCrunchNews = function (data) {
              $.ajax({
                  type: 'GET',
                  url:'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035',
                  success: function(data){
                      console.log('success', data);
                      console.log(data);
                    
                    //   var itemResults = ' <div class="col-xs-12  latestItNewsT" id="latestItNewsTitle">'+ data.articles[1].title +'</div>';
                    //       itemResults += '<div class = "col-xs-12 latestItImage" id="latestItImageOne" style="background-image: url(' + data.articles[1].urlToImage + ')"></div>';
                    //       itemResults += ' <div class="col-xs-12 latestItNews" id="latestItNewsOne">'+ data.articles[1].description +'</div>';
                    //       itemResults += '<div class="col-xs-12 latestItNews" id="latestItNewsTwo">'+ data.articles[2].description +'</div>';
                    //       itemResults += '<div class="col-xs-12 latestItNews" id="latestItNewsThree">'+ data.articles[3].description +'</div>';
                    //       itemResults += '<div class="col-xs-12 latestItNews" id="latestItNewsFour">'+ data.articles[4].description +'</div>';
                    //       itemResults += '<div class="col-xs-12 latestItNews" id="latestItNewsFive">'+ data.articles[5].description +'</div>';
                      
                    //   $("#serieAPI").html(itemResults); 
                  }
                  }); 
            };
};


// var TechCrunchApi = function() {
//     return function(dispatch) {
//         var url = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035';
//          console.log("here");
//         return fetch(url).then(function(response) {
//             console.log(response);
//             if (response.status < 200 || response.status >= 300) {
//                 var error = new Error(response.statusText)
//                 error.response = response
//                 throw error;
//             }
//             return response;
//         })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             var description = data.description;
//             return dispatch(
//                 // TechCrunchApiSuccess(description)
//             );
//         })
//         .catch(function(error) {
//             return dispatch(
//                 // TechCrunchApiError(error)
//             );
//         });
//     }
// };

exports.TechCrunchApi = TechCrunchApi;  
