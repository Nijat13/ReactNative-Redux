import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/authActions';


import Login from '../components/Login/Login'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

class AuthPage extends Component {
  constructor(props) {
    super(props);

    this.submitLogin = this.submitLogin.bind(this);
  }
  submitLogin({phoneNumber, password}) {
    console.log('this.props.login: ', this.props.login);
    this.props.login.request(phoneNumber, password);
  }
  render() {
    return (
      <View style={styles.container}>
        <Login
          submitLogin={this.submitLogin}/>
      </View>
    )
  }
}

/**
 * propTypes
 * @param  {object} login Login action
 */
AuthPage.propTypes = {
  login: PropTypes.object
};

/**
 * mapDispatchToProps
 * @param  {object} login Login ({request, success, failure})
 */
function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(AuthPage);
