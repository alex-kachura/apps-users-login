import * as React from 'react'
import { PureComponent } from 'react'
import { isEmpty } from 'lodash'
import styled from 'styled-components'

import Empty from '../Empty/Empty'
import { ListActions } from '../../typings'

const StyledList = styled.ul`
  padding: .7rem;
`

interface ListProps<T> {
  items: T[];
  actions?: ListActions<T>

  itemRenderer(item: T, actions?: ListActions<T>): JSX.Element
}

export default class List<T> extends PureComponent<ListProps<T>, {}> {
  public render() {
    const { items, itemRenderer, actions } = this.props

    if (isEmpty(items)) {
      return <Empty />
    }

    return (
      <StyledList>
        {items.map((item) => itemRenderer(item, actions))}
      </StyledList>
    )
  }
}
