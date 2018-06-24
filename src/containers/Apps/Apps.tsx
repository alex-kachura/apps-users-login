import * as React from 'react'
import { ChangeEvent, Component, Fragment, MouseEvent } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import * as Modal from 'react-modal'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MODAL_STYLE } from '../../consts'
import { fetchApps, updateApp } from '../../actions'
import Loading from '../../components/Loading/Loading'
import AppsList from '../../components/AppsList/AppsList'
import Button from '../../components/Button/Button'
import Field from '../../components/Field/Field'
import Close from '../../components/Close/Close'
import { App, AppUpdate, ListActions, StoreState } from '../../typings'

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

const Form = styled.form`
  width: 460px;
`

interface AppsProps {
  apps: App[]
  isFetching: boolean
  isPosting: boolean

  fetchApps(): void

  updateApp(app: AppUpdate): Promise<App>
}

interface AppsState {
  appEdited: AppUpdate | null
}

class Apps extends Component<AppsProps, AppsState> {
  private actions: ListActions<App> = [{
    title: 'Edit',
    icon: 'edit',
    fn: this.openEditAppModal.bind(this),
  }]

  constructor(props: AppsProps) {
    super(props)

    this.state = {
      appEdited: null,
    }
  }

  public componentDidMount() {
    this.props.fetchApps()
  }

  public render() {
    const { apps, isFetching, isPosting } = this.props
    const { appEdited } = this.state

    if (isFetching) {
      return <Loading />
    }

    return (
      <main>
        <Modal
          isOpen={!!appEdited}
          onRequestClose={this.closeEditAppModal}
          contentLabel="Edit App Modal"
          style={MODAL_STYLE}
        >
          {
            appEdited && (
              <Fragment>
                <Title>Edit App</Title>
                <Form>
                  <Field name="name" value={appEdited.name} onChange={this.handleEditAppInputChange} label="Name" />
                  <Field name="logo" value={appEdited.logo} onChange={this.handleEditAppInputChange} label="Logo" />
                  <Button primary onClick={this.updateApp}>{isPosting ? 'Updating...' : 'Update'}</Button>
                </Form>
                <Close onClick={this.closeEditAppModal}><FontAwesomeIcon icon="times" /></Close>
              </Fragment>
            )
          }
        </Modal>

        <AppsList items={apps} actions={this.actions} />
      </main>
    )
  }

  private openEditAppModal(app: App) {
    const { id, name, logo } = app

    this.setState({ appEdited: { id, name, logo } })
  }

  private closeEditAppModal = () => {
    this.setState({ appEdited: null })
  }

  private updateApp = (e: MouseEvent) => {
    const { appEdited } = this.state

    e.preventDefault()

    if (appEdited) {
      this.props.updateApp(appEdited)
        .then(this.props.fetchApps)
        .then(this.closeEditAppModal)
    }
  }

  private handleEditAppInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { appEdited } = this.state
    const { name, value } = e.target

    if (appEdited) {
      this.setState({
        appEdited: {
          ...appEdited,
          [name]: value,
        },
      })
    }
  }
}

const mapStateToProps = (state: StoreState) => ({
  apps: state.apps.items,
  isFetching: state.apps.isFetching,
  isPosting: state.apps.isPosting,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    fetchApps,
    updateApp,
  },
  dispatch,
)

export default connect<Partial<AppsProps>>(mapStateToProps, mapDispatchToProps)(Apps)
