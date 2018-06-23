import * as React from 'react'
import { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'

import { fetchApps, updateApp } from '../../actions'
import Loading from '../../components/Loading/Loading'
import AppsList from '../../components/AppsList/AppsList'
import { App, StoreState } from '../../typings'

interface AppsProps {
  apps: App[]
  isFetching: boolean

  fetchApps(): void
  updateApp(): void
}

class Apps extends PureComponent<AppsProps, {}> {
  public componentDidMount() {
    this.props.fetchApps()
  }

  public render() {
    const { apps, isFetching } = this.props

    if (isFetching) {
      return <Loading />
    }

    return <AppsList items={apps} />
  }
}

const mapStateToProps = (state: StoreState) => ({
  apps: state.apps.items,
  isFetching: state.apps.isFetching,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    fetchApps,
    updateApp,
  },
  dispatch,
)

export default connect<Partial<AppsProps>>(mapStateToProps, mapDispatchToProps)(Apps)
