import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getStocks } from './store/actions';
import Dashboard from './components/dashboard';

const mapStateToProps = state => {
  return { stocks: state.stocks };
}
class ConnectedApp extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.connection = new WebSocket('ws://stocks.mnet.website');
    this.connection.onmessage = this.connectionworking;

  }

  connectionworking = (message) => {

    var stocksArr =  JSON.parse(message.data);
    this.props.getStocks(stocksArr);
  }

  render() {

    return (
      <Dashboard />
    );
  }
}

const App = connect(mapStateToProps, { getStocks })(ConnectedApp);

export default App;
