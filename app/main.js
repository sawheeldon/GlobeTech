/* global $ */

var React = require('react');
var ReactDOM = require('react-dom');
var fetch  = require('isomorphic-fetch');
// var TheVerge = require('./app/verge.js');

// main page function which shows and hides all the pages.

var MainPage = React.createClass({
    getInitialState: function() {
        return { 
            renderDisplay: true, 
            // articles: []
        };
    },
    componentDidMount: function(){
       fetch('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035')
            .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        var itemResults = ' <div class="col-xs-12  NewsResponseTitle" id="latestCrunchNewsTitle">'+ data.articles[1].title +'</div>';
            itemResults += ' <div class="col-xs-12 NewsResponse" id="latestCrunchNewsOne">'+ data.articles[1].description +'</div>';
            itemResults += '<div class="col-xs-12 NewsResponse" id="latestCrunchNewsTwo">'+ data.articles[2].description +'</div>';
            itemResults += '<div class="col-xs-12 NewsResponse" id="latestCrunchNewsThree">'+ data.articles[3].description +'</div>';
            itemResults += '<div class="col-xs-12 NewsResponse" id="latestCrunchNewsFour">'+ data.articles[4].description +'</div>';
            itemResults += '<div class="col-xs-12 NewsResponse" id="latestCrunchNewsFive">'+ data.articles[5].description +'</div>';
        $('#TechCrunchNewsWell').html(itemResults);    
        // this.setState({ articles: data.articles});
        // {this.state.data.map(function(article) {
        //                                         return <li>article</li>;
        //                                     })}
    }); 
    },
    onClick: function (){
        this.setState({ renderDisplay: true });
    },
    aboutUs: function (){
        this.setState({ renderDisplay:false});
    },
    renderDisplay: function() {
        // console.log(TechCrunchApi);
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
                                            <div id="TechCrunchNewsWell"></div>
                                        </div> 
                                    </div>
                            </div> 
                            <div className="techButtons col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <button className="btn btn-warning" data-toggle="collapse" data-target="#verge">The Verge</button>
                                    <div className="collapse" id="verge"> 
                                        <div className="well">
                                            <img className="img-responsive" src="./images/verge.png" />
                                            <div id="TheVergeNewsWell"></div>
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

module.exports = MainPage;
