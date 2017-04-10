var React = require('React');
var ReactDOM = require('React-DOM');
require('./index.css');

class App extends React.Component {
    render() {
        return (<div> Hello, World!  </div>)
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
