import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import RootNavigator from './routes';

import AuthPage from './pages/AuthPage'

class Main extends Component {
  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated)
      return <AuthPage />;

    return <RootNavigator />;
  }
}

const mapStateToProps = function(state) {
  const { user } = state;
  return {
    isAuthenticated: user.isAuthenticated,
  }
};

export default connect(mapStateToProps)(Main);
