/* global $ */

var React = require('react');
var ReactDOM = require('react-dom');
var fetch  = require('isomorphic-fetch');

var TheVerge = React.createClass({
    getInitialState: function() {
        return { 
            renderDisplay: true, 
        };
    },
    componentDidMount: function(){
       fetch('https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035')
            .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        var itemResults = ' <div class="col-xs-12  NewsResponseTitle" id="latestVergeNewsTitle">'+ data.articles[1].title +'</div>';
            itemResults += ' <div class="col-xs-12 NewsResponse" id="latestVergeNewsOne">'+ data.articles[1].description +'</div>';
            itemResults += '<div class="col-xs-12 NewsResponse" id="latestVergeNewsTwo">'+ data.articles[2].description +'</div>';
            itemResults += '<div class="col-xs-12 NewsResponse" id="latestVergeNewsThree">'+ data.articles[3].description +'</div>';
            itemResults += '<div class="col-xs-12 NewsResponse" id="latestVergeNewsFour">'+ data.articles[4].description +'</div>';
            itemResults += '<div class="col-xs-12 NewsResponse" id="latestVergeNewsFive">'+ data.articles[5].description +'</div>';
        $('#TheVergeNewsWell').html(itemResults);    
        // this.setState({ articles: data.articles});
        // {this.state.data.map(function(article) {
        //                                         return <li>article</li>;
        //                                     })}
    }); 
    },
    render: function(){
        return(
            <div className="techButtons col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <button className="btn btn-warning" data-toggle="collapse" data-target="#verge">The Verge</button>
                                    <div className="collapse" id="verge"> 
                                        <div className="well">
                                            <img className="img-responsive" src="./images/verge.png" />
                                            <div id="TheVergeNewsWell"></div>
                                        </div> 
                                    </div>
                            </div> 
            );
    }
    
});
    
    
module.exports = TheVerge;