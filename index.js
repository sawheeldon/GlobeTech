var React = require('react');
var ReactDOM = require('react-dom');
var FrontLogos = require('./app/logos');
// var Button = React.createFactory(require('./app/button'));


//first page shown to user on arrival to page

var TitlePage = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.setState({ showResults: true });
    },
    render: function() {
        var heading = function() {
            return (
                <div className="title">
                <h1>GlobeTech</h1>
                <h2>Your one stop shop for all news tech!</h2>
                <img height="100" src={FrontLogos} />
                </div>
                );
        }
         if(this.props.onClick === true){
            heading = "displayNone";
        }
        else{
            MainPage = "displayNone";
        }
        return (
            <div key="titlePage">
                <div>{heading}</div>
                <input type="submit" className="btn btn-primary" onClick={this.onClick} />
                { this.state.showResults ? <MainPage /> : null }
            </div>
        );
    }
});

var MainPage = React.createClass({
    render: function() {
        return (
            <div id="MainPage" className="main-page">
                <h1>GlobeTech</h1>
                <h2>Take a look at our brilliant news links below!</h2>
            </div>
        );
    }
});


//find ids and renders DOM

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<TitlePage />, document.getElementById('TitlePage'));
});