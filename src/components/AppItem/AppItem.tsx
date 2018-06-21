import * as React from 'react'
import { StatelessComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { App } from '../../typings'

const StyledAppItem = styled.li`
  padding: .5em 0;
  
  & + li {
    border-top: 1px solid #f5f5fa;
  }
`

interface AppItemProps {
  item: App
}

const AppItem: StatelessComponent<AppItemProps> = ({
  item: {
    id,
    created,
    logo,
    name,
  },
}) => {
  return (
    <StyledAppItem>
      <Link to={`/${id}`}>{name}</Link>
    </StyledAppItem>
  )
}

export default AppItem
