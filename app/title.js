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
    
module.exports = TitlePage;