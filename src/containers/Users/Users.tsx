import * as React from 'react'
import { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import * as InfiniteScroll from 'react-infinite-scroller'

import Loading from '../../components/Loading/Loading'
import { fetchUsers } from '../../actions'
import { getAppUsers, getHasMore, getOffset } from '../../selectors'
import { AppId, User } from '../../typings'
import UsersList from '../../components/UsersList/UsersList'

interface UsersProps {
  users: User[]
  hasMore: boolean
  offset: number
  match: {
    params: {
      appId: string
    }
  }

  fetchUsers(id: AppId, offset: number): Promise<User[]>
}

class Users extends PureComponent<UsersProps> {
  public render() {
    const { users, hasMore } = this.props

    return (
      <InfiniteScroll
        loadMore={this.loadMore}
        loader={Loading()}
        hasMore={hasMore}
      >
        <UsersList items={users} />
      </InfiniteScroll>
    )
  }

  private loadMore = () => {
    const { match: { params: { appId } }, offset } = this.props

    return this.props.fetchUsers(appId, offset)
  }
}

const mapStateToProps = createStructuredSelector({
  users: getAppUsers(),
  hasMore: getHasMore(),
  offset: getOffset(),
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    fetchUsers,
  },
  dispatch,
)

export default connect<Partial<UsersProps>>(mapStateToProps, mapDispatchToProps)(Users)
