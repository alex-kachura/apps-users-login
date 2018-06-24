import * as React from 'react'
import { StatelessComponent } from 'react'

import AppItem from '../AppItem/AppItem'
import List from '../List/List'
import { App, ListActions } from '../../typings'

const renderItem = (item: App, actions: ListActions<App>) => <AppItem key={item.id} item={item} actions={actions} />

interface AppsListProps {
  items: App[]
  actions: ListActions<App>
}

const AppsList: StatelessComponent<AppsListProps> = ({ items, actions }) => {
  return (
    <List
      items={items}
      itemRenderer={renderItem}
      actions={actions}
    />
  )
}

export default AppsList
