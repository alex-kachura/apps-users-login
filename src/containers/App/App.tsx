import * as React from 'react'
import { Component, MouseEvent } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { isEmpty } from 'lodash'

import { loggedIn, logout, resetErrorMessage } from '../../actions'
import Error from '../../components/Error/Error'
import Home from '../Home/Home'
import Login from '../Login/Login'
import { ProfileState, StoreState } from '../../typings'
import { AUTH_KEY } from '../../consts'
import axios from 'axios'

interface AppProps {
  profile: ProfileState
  errorMessage: string | null

  logout(): void

  loggedIn(): void

  resetErrorMessage(): void
}

class App extends Component<AppProps, {}> {
  public componentDidMount() {
    let auth

    try {
      auth = JSON.parse(localStorage.getItem(AUTH_KEY) || '""')
    } catch (e) {
      window.console.warn(e)
    }

    if (isEmpty(auth) || auth.exp * 1000 < Date.now()) {
      this.props.logout()
    } else {
      axios.defaults.headers.common.Authorization = auth.accessToken
      this.props.loggedIn()
    }
  }

  public render() {
    const { profile, errorMessage } = this.props

    if (errorMessage) {
      return <Error error={errorMessage} onDismiss={this.onDismiss} />
    }

    if (profile.isLoggedIn) {
      return <Home />
    }

    return <Login />
  }

  private onDismiss = (e: MouseEvent) => {
    e.preventDefault()
    this.props.resetErrorMessage()
  }
}

const mapStateToProps = (state: StoreState) => ({
  profile: state.profile,
  errorMessage: state.errorMessage,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    logout,
    loggedIn,
    resetErrorMessage,
  },
  dispatch,
)

export default connect<Partial<AppProps>>(mapStateToProps, mapDispatchToProps)(App)