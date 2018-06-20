import * as React from 'react'
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'

import { fetchData } from '../../actions'
import AppsList from '../../components/AppsList/AppsList'
import { App, StoreState } from '../../typings'

interface HomeProps {
  apps: App[]

  fetchData(): void
}

class Home extends Component<HomeProps, {}> {
  public componentDidMount() {
    this.props.fetchData()
  }

  public render() {
    const { apps } = this.props

    return (
      <AppsList items={apps} />
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  apps: state.data.apps,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    fetchData,
  },
  dispatch,
)

export default connect<Partial<HomeProps>>(mapStateToProps, mapDispatchToProps)(Home)
