import * as React from 'react'
import { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import * as InfiniteScroll from 'react-infinite-scroller'

import { getAppUsers, getHasMore, getOffset } from '../../selectors'
import { fetchUsers } from '../../actions'
import Loading from '../../components/Loading/Loading'
import UsersList from '../../components/UsersList/UsersList'
import { AppId, StoreState, User } from '../../typings'

interface UsersProps {
  users: User[]
  isFetching: boolean
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
      <main>
        <InfiniteScroll
          loadMore={this.loadMore}
          loader={Loading()}
          hasMore={hasMore}
          threshold={50}
        >
          <UsersList items={users} />
        </InfiniteScroll>
      </main>
    )
  }

  private loadMore = () => {
    const { match: { params: { appId } }, offset, isFetching } = this.props

    if (isFetching) {
      return
    }

    return this.props.fetchUsers(appId, offset)
  }
}

const mapStateToProps = createStructuredSelector({
  users: getAppUsers(),
  hasMore: getHasMore(),
  offset: getOffset(),
  isFetching: (state: StoreState) => state.users.isFetching,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    fetchUsers,
  },
  dispatch,
)

export default connect<Partial<UsersProps>>(mapStateToProps, mapDispatchToProps)(Users)
