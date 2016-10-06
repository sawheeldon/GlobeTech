/* global $ */
var React = require('react');
var ReactDOM = require('react-dom');
var redux = require('redux');
// var FrontLogos = require('./app/logos');
var fetch  = require('isomorphic-fetch');
var TitlePage = require('./app/title.js');
var MainPage = require('./app/main.js');
// var TheVerge = require('./app/verge.js');



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




document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById('PageWrapper'));
});