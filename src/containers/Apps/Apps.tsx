import * as React from 'react'
import { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'

import { fetchApps } from '../../actions'
import AppsList from '../../components/AppsList/AppsList'
import { App, StoreState } from '../../typings'
import Loading from '../../components/Loading/Loading'

interface AppsProps {
  apps: App[]
  isFetching: boolean

  fetchData(): void
}

class Apps extends PureComponent<AppsProps, {}> {
  public componentDidMount() {
    this.props.fetchData()
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
    fetchData: fetchApps,
  },
  dispatch,
)

export default connect<Partial<AppsProps>>(mapStateToProps, mapDispatchToProps)(Apps)
