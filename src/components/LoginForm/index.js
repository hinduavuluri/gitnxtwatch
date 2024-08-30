import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  WatchLogo,
  LabelText,
  InputContainer,
  CheckBoxContainer,
  CheckBoxInput,
  FormContainer,
  Button,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const loginOptions = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, loginOptions)
    const data = await response.jsoon()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrMsg, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <FormContainer onSubmit={this.submitForm}>
          <WatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LabelText className="label-text" htmlFor="username">
            USERNAME
          </LabelText>
          <InputContainer
            type="text"
            id="username"
            className="input-container"
            onChange={this.onChangeUsername}
            value={username}
          />
          <LabelText className="label-text" htmlFor="password">
            PASSWORD
          </LabelText>
          <InputContainer
            type="password"
            id="password"
            className="input-container"
            onChange={this.onChangePassword}
            value={password}
          />
          <CheckBoxContainer>
            <CheckBoxInput type="checkbox" id="checkbox" />
            <LabelText
              className="label-text"
              htmlFor="checkbox"
              onChange={this.onShowPassword}
            >
              Show Password
            </LabelText>
          </CheckBoxContainer>
          <Button className="button" type="submit">
            Login
          </Button>
          {showErrMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </FormContainer>
      </LoginContainer>
    )
  }
}
export default LoginForm
