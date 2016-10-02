// var React = require('react');
// var ReactDOM = require('react-dom');

// // function to deal with Button

// var Button = React.createClass({
//     getInitialState: function() {
//         return { showResults: false };
//     },
//     onClick: function() {
//         this.setState({ showResults: true });
//     },
//     render: function() {
//         return (
//             <div>
//                 <input type="submit" class="btn btn-primary" onClick={this.onClick} />
//                 { this.state.showResults ? <MainPage /> : null }
//             </div>
//         );
//     }
// });

// var MainPage = React.createClass({
//     render: function() {
//         return (
//             <div id="MainPage" className="main-page">
//                 <h1>GlobeTech</h1>
//                 <h2>Take a look at our brilliant news links below!</h2>
//             </div>
//         );
//     }
// });

// module.exports = Button;