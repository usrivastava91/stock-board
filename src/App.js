import React from 'react';
import logo from './logo.svg';
import './App.css';
import openSocket from 'socket.io-client';
import { connect } from 'react-redux';
import { getStocks } from './store/actions';
import Dashboard from './components/dashboard';
import Button from '@material-ui/core/Button';
// const socket = openSocket('ws://stocks.mnet.website');

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

    var stocksObj = {};
    var stocksArr =  JSON.parse(message.data);
    // console.log('raw array ============>', stocksArr)
    // stocksArr.forEach(arr => {
    //   stocksObj[arr[0]] = arr[1];
    // });

    // console.log('RECIEVED IN ============>', stocksObj)
    // var result = Object.keys(stocksObj).map(function(key) {
    //   return [String(key), stocksObj[key]];
    // });
    // console.log('RECIEVED IN ============>', stocksObj)
    this.props.getStocks(stocksArr)

  }

  render() {

    return (
      <Dashboard stocks = {this.stocksObj}/>
    );
  }
}

const App = connect(mapStateToProps, { getStocks })(ConnectedApp);

export default App;
