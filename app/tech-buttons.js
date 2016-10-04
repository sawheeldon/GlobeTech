/* global $ */
var React = require('react');
var ReactDOM = require('react-dom');



var theVerge = React.createClass({
    onClick: function(){
        $('.test').hide();
    },
    render: function() {
        return (
            <div id="MainPage" className="main-page">
                <button className="btn btn-warning" onClick={this.onClick}>The Verge</button>
            </div>
        );
    }
});

module.exports = theVerge();