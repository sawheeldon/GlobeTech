var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
// var FrontLogos = require('./app/logos');
var fetch  = require('isomorphic-fetch');
var TechCrunchApi = require('./app/apicall.js');



//app function which shows the first page setting the state of the first button

var App = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.setState({ showResults: true });
        $('.titlePage').hide();
        $('.submitButton').hide();
    },
    render: function() {
        return (
            <div>
                <div> <TitlePage/> </div>
                <div className="col-xs-12">
                <input type="submit" className="btn btn-primary submitButton" onClick={this.onClick} />
                </div>
                { this.state.showResults ? <MainPage /> : null }
            </div>
        );
    }
});

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
                            <div className="carousel-inner">
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
    
// main page function which shows and hides all the pages.

var MainPage = React.createClass({
    getInitialState: function() {
        return { renderDisplay: true };
    },
    onClick: function (){
        this.setState({ renderDisplay: true });
    },
    aboutUs: function (){
        this.setState({ renderDisplay:false});
    },
    renderDisplay: function() {
        console.log(TechCrunchApi);
        return (
            <div className="mainPageWrapper">
                <h1>GlobeTech</h1>
                 <div className="mainPageContainer">
                    <h2 className="mainPageSub">Take a look at our brilliant news links below!</h2>
                    <button className="btn btn-default" onClick={this.aboutUs}> About Us </button>
                    <div className="col-xs-12">
                            <div className="techButtons col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <button className="btn btn-success" data-toggle="collapse" data-target="#crunch">TechCrunch</button>
                                    <div className="collapse" id="crunch"> 
                                        <div className="well">
                                            <img className="img-responsive"  src="./images/crunch.png" />
                                        </div> 
                                    </div>
                            </div> 
                            <div className="techButtons col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <button className="btn btn-warning" data-toggle="collapse" data-target="#verge">The Verge</button>
                                    <div className="collapse" id="verge"> 
                                        <div className="well">
                                            <img className="img-responsive" src="./images/verge.png" />
                                        </div> 
                                    </div>
                            </div>    
                            <div className="techButtons col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <button className="btn btn-danger" data-toggle="collapse" data-target="#recode">Recode</button>
                                    <div className="collapse" id="recode"> 
                                        <div className="well">
                                            <img className="img-responsive" src="./images/Recode.png" />
                                        </div> 
                                    </div>
                            </div>
                            <div className="techButtons col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <button className="btn btn-primary" data-toggle="collapse" data-target="#mash">Mashable</button>
                                    <div className="collapse" id="mash"> 
                                        <div className="well">
                                            <img className="img-responsive" src="./images/mashable.png" />
                                        </div> 
                                    </div>
                            </div>
                            <div className="techButtons col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <button className="btn btn-default" data-toggle="collapse" data-target="#techradar">TechRadar</button>
                                    <div className="collapse" id="techradar"> 
                                        <div className="well">
                                            <img className="img-responsive" src="./images/TechRadar.png" />
                                        </div> 
                                    </div>
                            </div>
                    </div>
                 </div>    
            </div>
        );
    },
    renderAbout: function() {
        return (
             <div className="aboutContainer">
                <h2>About Our App</h2>
                 <div className="mainPageContainer">
                    <button className="btn btn-default backButton" onClick={this.onClick} > BACK </button>
                    <h3>GlobeTech brings you all the latest tech news from around the globe. It is mobile optimized and super quick because it is built in React, a coding library used by none other than FaceBook. We utilize the latest CSS techniques by using Bootstrap and use clever one page trickery so you never leave the first page... In fact there is only one page. Neat right. </h3>
                </div>
            </div>
            );
    },
    render: function () {
        if (this.state.renderDisplay) {
            return this.renderDisplay();
        }
        else{
            return this.renderAbout();
        }
    }
});

//tech crunch api call and function to render page

// var TechCrunchApi = function () {
//         var url = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035';
//         console.log("here");
//         return fetch(url).then(function(response) {
//             console.log(response);
//             if (response.status < 200 || response.status >= 300) {
//                 var error = new Error(response.statusText)
//                 error.response = response
//                 throw error;
//             }
//             // return response;
//         })
//         // .then(function(response) {
//         //     return response.json();
//         // })
// };
    
    
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

// // exports.TechCrunchApi = TechCrunchApi;    
    


//find ids and renders DOM

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById('PageWrapper'));
});