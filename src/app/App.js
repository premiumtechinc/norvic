import React from 'react';

import Routes from './routes';

import './App.scss';


class App extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Routes history={history} />
    );
  }
}

export default App;
