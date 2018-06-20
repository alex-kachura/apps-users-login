import * as React from 'react'
import { StatelessComponent } from 'react'
import styled from 'styled-components'

import { App } from '../../typings'

const StyledListItem = styled.li`
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
    created,
    logo,
    name,
  },
}) => {
  return (
    <StyledListItem>
      {name}
    </StyledListItem>
  )
}

export default AppItem
