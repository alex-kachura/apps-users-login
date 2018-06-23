import * as React from 'react'
import { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoginForm from '../../components/LoginForm/LoginForm'
import { login } from '../../actions'
import { LoginData, LoginResponse, StoreState } from '../../typings'

interface LoginProps {
  isPosting: boolean
  isLoggedIn: boolean,

  login(data: LoginData): Promise<LoginResponse>
}

class Login extends PureComponent<LoginProps, {}> {
  public render() {
    const { isPosting, isLoggedIn } = this.props

    if (isLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <LoginForm
        isPosting={isPosting}
        onSubmit={this.props.login}
      />
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  isPosting: state.profile.isPosting,
  isLoggedIn: state.profile.isLoggedIn,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    login,
  },
  dispatch,
)

export default connect<Partial<LoginProps>>(mapStateToProps, mapDispatchToProps)(Login)
