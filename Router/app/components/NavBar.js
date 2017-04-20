var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function NavBar() {
    return (
        <ul>
            <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
            </li>
        </ul>
    )
}

module.exports = NavBar;
