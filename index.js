var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
var FrontLogos = require('./app/logos');
var TechCrunch = React.createFactory(require('./app/apicall'));
var fetch  = require('isomorphic-fetch');



//first page shown to user on arrival to page

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

var TitlePage = React.createClass({
    render: function () {
            return (
                <div className="container col-xs-12 titlePage">
                <h1>GlobeTech</h1>
                <h2>Your one stop shop for all news tech!</h2>
                    <img className="rotating-item" src={FrontLogos} />
                </div>
                );
            }
    });
    
    
var MainPage = React.createClass({
    onClick: function(){
        if ('#tech-crunch'){
        $('.main-page').hide();
        }
        else if ('#recode'){
            $('#tech-crunch').hide();
        }
        else{
            console.log("nothing happened");
        }
    },
    render: function() {
        return (
            <div id="MainPage" className="main-page">
                <h1>GlobeTech</h1>
                <h2>Take a look at our brilliant news links below!</h2>
                <button key="tech-crunch" className="btn btn-success test" onClick={this.onClick}>TechCrunch</button>
                <button className="btn btn-warning" onClick={this.onClick}>The Verge</button>
                <button key="recode" className="btn btn-danger test-test"  onClick={this.onClick}>Recode</button>
                <button className="btn btn-primary" onClick={this.onClick}>Mashable</button>
                <button className="btn btn-default" onClick={this.onClick}>TechRadar</button>
            </div>
        );
    }
});


//find ids and renders DOM

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById('PageWrapper'));
});