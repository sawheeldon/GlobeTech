/* global $ */
var React = require('react');
var ReactDOM = require('react-dom');
var Request = require('superagent');

//title page function which creates the title page content
var TitlePage = React.createClass({
    render: function () {
            return (
                <div className="container col-xs-12 titlePage">
                <h1>GlobeTech</h1>
                <h2>Your one stop shop for all news tech!</h2>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div id="my-slider" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner logosFrontPage">
                                <div className="item active rotating-item"><img src="./images/crunch.png" alt=""/></div>
                                <div className="item rotating-item"><img src="./images/verge.png" alt=""/></div>
                                <div className="item rotating-item"><img src="./images/Recode.png" alt=""/></div>
                                <div className="item rotating-item"><img src="./images/mashable.png" alt=""/></div>
                                <div className="item rotating-item"><img src="./images/TechRadar.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
                </div>
                );
            }
    });
    
    
    
//     var App = React.createClass({
//     getInitialState: function() {
//         return {
//             showResults: false,
//             articles: [ ]
//         };

//     },

//     constructor: function() {
//         super();
//         this.state = {
//                         showResults: false,
// ,
//             articles: [showResults: false,]
//         }
//     }
//     componentDidMount: function(){
//       fetch('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035')
//             .then(function(response) {
//         if (response.status >= 400) {
//             throw new Error("Bad response from server");
//         }
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         this.setState({ articles: [{id: 1, name:'Ray'}, {id:2, text:"AAAAAA"}]});
//     });
//     },
//     onClick: function() {
//         this.setState({ showResults: true });
//         $('.titlePage').hide();
//         $('.submitButton').hide();
//     },

//     render: function() {
//         return (
//             <div>
//                 <div> <TitlePage/> </div>
//                 <div className="col-xs-12">
//                 <input type="submit" className="btn btn-primary submitButton" onClick={this.onClick} />
//                 </div>
//                 { this.state.showResults ? <MainPage /> : null }
//                 {this.renderData}
//                 {this.state.articles}
//             </div>
//         );
//     }
// });
module.exports = TitlePage;