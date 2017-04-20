var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

var Home = require('./components/Home');
var About = require('./components/About');
var ContactUs = require('./components/ContactUs');
var NavBar = require('./components/NavBar');

require('./index.css');

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={ContactUs} />
            </div>
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
