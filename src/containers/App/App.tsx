import * as React from 'react'
import { MouseEvent, PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { loggedIn, loggedOut, resetErrorMessage, testAccessToken } from '../../actions'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import Apps from '../Apps/Apps'
import Users from '../Users/Users'
import Login from '../Login/Login'
import { AccessTokenTestResponse, StoreState } from '../../typings'

interface AppProps {
  isLoggedIn: boolean
  isChecking: boolean
  errorMessage: string | null

  loggedOut(): void

  loggedIn(): void

  testAccessToken(): Promise<AccessTokenTestResponse>

  resetErrorMessage(): void
}

class App extends PureComponent<AppProps, {}> {
  public componentDidMount() {
    return this.props.testAccessToken()
  }

  public render() {
    const { errorMessage, isChecking } = this.props

    if (isChecking) {
      return <Loading />
    }

    if (errorMessage) {
      return <Error error={errorMessage} onDismiss={this.onDismiss} />
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/apps" render={this.loggedInRenderer} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/apps" />
        </Switch>
      </BrowserRouter>
    )
  }

  private loggedInRenderer = () => {
    const { isLoggedIn } = this.props

    return isLoggedIn ? (
      <Route>
        <Switch>
          <Route exact path="/apps" component={Apps} />
          <Route exact path="/apps/:appId/users" component={Users} />
        </Switch>
      </Route>
    ) : (
      <Redirect to="/login" />
    )
  }

  private onDismiss = (e: MouseEvent) => {
    e.preventDefault()
    this.props.resetErrorMessage()
  }
}

const mapStateToProps = (state: StoreState) => ({
  isLoggedIn: state.profile.isLoggedIn,
  isChecking: state.profile.isChecking,
  errorMessage: state.errorMessage,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    loggedOut,
    loggedIn,
    testAccessToken,
    resetErrorMessage,
  },
  dispatch,
)

export default connect<Partial<AppProps>>(mapStateToProps, mapDispatchToProps)(App)
