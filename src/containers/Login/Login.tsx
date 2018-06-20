import * as React from 'react'
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'

import LoginForm from '../../components/LoginForm/LoginForm'
import { login } from '../../actions'
import { LoginData, LoginResponse, StoreState } from '../../typings'

interface LoginProps {
  isPosting: boolean

  login(data: LoginData): Promise<LoginResponse>
}

class Login extends Component<LoginProps, {}> {
  public render() {
    const { isPosting } = this.props

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
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    login,
  },
  dispatch,
)

export default connect<Partial<LoginProps>>(mapStateToProps, mapDispatchToProps)(Login)
