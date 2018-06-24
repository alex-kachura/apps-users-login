import * as React from 'react'
import { StatelessComponent } from 'react'
import styled from 'styled-components'

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
`

interface EmptyProps {
  text?: string;
}

const Empty: StatelessComponent<EmptyProps> = ({
  text = 'The list is empty',
}) => (
  <div>
    <Title>{text}</Title>
  </div>
)

export default Empty
