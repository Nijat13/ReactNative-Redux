import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Button
} from 'native-base';
import style from './Login.style'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '+994',
      password: '',
      phoneNumberError: false,
      passwordError: false
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.phoneNumberHandler = this.phoneNumberHandler.bind(this);
  }

  onSubmit() {
    let { phoneNumber, password } = this.state;
    const phoneValidRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{6}$/;

    // console.log('phoneValidRegExp.test(phoneNumber): ', phoneValidRegExp.test(phoneNumber));

    // If phone Valid
    if (!phoneValidRegExp.test(phoneNumber)){
      this.setState({phoneNumberError: true})
    }

    phoneNumber = phoneNumber.replace(/-/g, '')

    this.props.submitLogin({
      phoneNumber, password
    });

  }

  phoneNumberHandler(newNumber) {

    const { phoneNumber } = this.state;

    const onlyNums = newNumber.replace(/[^\d]/g, '')

    if (onlyNums.length <= 3){
      newNumber = '+994'
    }

    if (onlyNums.length <= phoneNumber.replace(/[^\d]/g, '').length){
      this.setState({
        phoneNumber: newNumber
      })
      return true;
    }
    else if (onlyNums.length > 10) {
     newNumber = `+${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 8)}-${onlyNums.slice(8, 10)}-${onlyNums.slice(10, 12)}`
    }
    else if (onlyNums.length > 8) {
     newNumber = `+${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 8)}-${onlyNums.slice(8)}`
    }
    else if (onlyNums.length > 5) {
     newNumber = `+${onlyNums.slice(0, 5)}-${onlyNums.slice(5)}`
    }

    this.setState({
      phoneNumber: newNumber
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item
              floatingLabel
              error={this.state.phoneNumberError}>
              <Label>Phone number</Label>
              <Input
                value={this.state.phoneNumber}
                onChangeText={(newNumber) => this.phoneNumberHandler(newNumber)} />
              {this.state.phoneNumberError && <Icon name='close-circle' />}
            </Item>
            <Item
              floatingLabel
              error={this.state.passwordError}>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(password) => this.setState({password})} />
            </Item>
            <Button
              onPress={this.onSubmit}
              style={style.signinButton}
              block>
              <Text style={style.signinText}> Sign in </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
