import * as React from 'react'
import { StatelessComponent } from 'react'
import styled from 'styled-components'

import { User } from '../../typings'

const StyledAppItem = styled.li`
  padding: .5em 0;
  
  & + li {
    border-top: 1px solid #f5f5fa;
  }
`

interface UserItemProps {
  item: User
}

const UserItem: StatelessComponent<UserItemProps> = ({
  item: {
    id,
    email,
    avatar,
    name,
  },
}) => {
  return (
    <StyledAppItem>{name}</StyledAppItem>
  )
}

export default UserItem
