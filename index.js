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
                <input type="submit" className="btn btn-primary submitButton" onClick={this.onClick} />
                { this.state.showResults ? <MainPage /> : null }
            </div>
        );
    }
});

var TitlePage = React.createClass({
    render: function () {
            return (
                <div className="titlePage">
                <h1>GlobeTech</h1>
                <h2>Your one stop shop for all news tech!</h2>
                    <img className="rotating-item" src={FrontLogos} />
                </div>
                );
            }
    });
    
    
var MainPage = React.createClass({
    onClick: function(){
        $('.main-page').hide();
        return TechCrunch;
    },
    render: function() {
        return (
            <div id="MainPage" className="main-page">
                <h1>GlobeTech</h1>
                <h2>Take a look at our brilliant news links below!</h2>
                <button className="btn btn-danger" onClick={this.onClick}>TechCrunch</button>
            </div>
        );
    }
});


//find ids and renders DOM

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById('PageWrapper'));
});