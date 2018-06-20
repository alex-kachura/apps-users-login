import * as React from 'react'
import { StatelessComponent } from 'react'

import AppItem from '../AppItem/AppItem'
import List from '../List/List'
import { App } from '../../typings'

const renderItem = (item: App) => <AppItem key={item.id} item={item} />

interface AppsListProps {
  items: App[]
}

const AppsList: StatelessComponent<AppsListProps> = ({ items }) => {
  return (
    <List
      items={items}
      itemRenderer={renderItem}
    />
  )
}

export default AppsList
