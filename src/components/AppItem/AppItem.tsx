import * as React from 'react'
import { StatelessComponent } from 'react'
import { Link } from 'react-router-dom'

import ActionIcon from '../ActionIcon/ActionIcon'
import ListItem from '../ListItem/ListItem'
import Flex from '../Flex/Flex'
import Image from '../Image/Image'
import { App, ListAction, ListActions } from '../../typings'

interface AppItemProps {
  item: App
  actions: ListActions<App>
}

const AppItem: StatelessComponent<AppItemProps> = ({
  item,
  actions,
}) => {
  const { id, logo, name } = item

  return (
    <ListItem>
      <Image src={logo} alt={name} title={name} />
      <Link to={`/apps/${id}/users`}>{name}</Link>
      <Flex />
      {actions.map(({ title, icon, fn }: ListAction<App>) => (
        <ActionIcon
          key={title}
          icon={icon}
          // tslint:disable-next-line jsx-no-lambda
          action={() => fn(item)}
          title={title}
        />
      ))}
    </ListItem>
  )
}

export default AppItem
