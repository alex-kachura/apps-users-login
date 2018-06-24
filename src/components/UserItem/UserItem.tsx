import * as React from 'react'
import { StatelessComponent } from 'react'
import styled from 'styled-components'

import ListItem from '../ListItem/ListItem'
import Image from '../Image/Image'
import Flex from '../Flex/Flex'
import { User } from '../../typings'

const UserName = styled.div`
  margin-left: 1rem;
`

interface UserItemProps {
  item: User
}

const UserItem: StatelessComponent<UserItemProps> = ({
  item: { id, email, avatar, name },
}) => {
  return (
    <ListItem>
      <Image src={avatar} alt={name} title={name} />
      <UserName>{name}</UserName>
      <Flex />
    </ListItem>
  )
}

export default UserItem
