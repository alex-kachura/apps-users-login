import * as React from 'react'
import { PureComponent } from 'react'
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
  noEmpty?: boolean;
}

export default class List<T> extends PureComponent<ListProps<T>, {}> {
  public render() {
    const { items, itemRenderer, noEmpty } = this.props

    if (!noEmpty && isEmpty(items)) {
      return <Empty />
    }

    return (
      <StyledList>
        {items.map(itemRenderer)}
      </StyledList>
    )
  }
}
