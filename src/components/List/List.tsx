import * as React from 'react'
import { Component } from 'react'
import { isEmpty } from 'lodash'
import styled from 'styled-components'

import Empty from '../Empty/Empty'

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`

interface ListProps<T> {
  items: T[];
  itemRenderer: (item: T) => JSX.Element;
}

export default class List<T> extends Component<ListProps<T>, {}> {
  public render() {
    const { items, itemRenderer } = this.props

    if (isEmpty(items)) {
      return <Empty />
    }

    return (
      <StyledList>
        {items.map(itemRenderer)}
      </StyledList>
    )
  }
}
