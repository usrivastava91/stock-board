//React imports
import React from 'react';

//MISC
import './App.css';
import Dashboard from './components/dashboard';
import EnableUnsafescript from './components/EnableUnsafescript';

class App extends React.Component {

  state = {
    hasError: false
  }

  // In case of error, updating the local component state.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    //If error occured, render fallback UI.
    if (this.state.hasError) {
      return <EnableUnsafescript />;
    }
    return (
      <Dashboard />
    );
  }
}

export default App;
