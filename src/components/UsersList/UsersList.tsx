import * as React from 'react'
import { StatelessComponent } from 'react'
import * as uuid from 'uuid'

import List from '../List/List'
import UserItem from '../UserItem/UserItem'
import { User } from '../../typings'

const renderItem = (item: User) => <UserItem key={uuid()} item={item} />

interface UsersListProps {
  items: User[]
}

const UsersList: StatelessComponent<UsersListProps> = ({ items }) => {
  return (
    <List
      items={items}
      itemRenderer={renderItem}
    />
  )
}

export default UsersList
