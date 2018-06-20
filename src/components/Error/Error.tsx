import * as React from 'react'
import { MouseEvent, StatelessComponent } from 'react'
import styled from 'styled-components'
import { isEmpty } from 'lodash'

import Button from '../Button/Button'

const StyledError = styled.div`
  background-color: #ee918d;
  padding: .7rem;
`

const ErrorMessage = styled.strong`
  margin-right: .6rem;
`

interface ErrorProps {
  error?: string;

  onDismiss?(event: MouseEvent): void;
}

const Error: StatelessComponent<ErrorProps> = ({ error, onDismiss }) => isEmpty(error) ?
  null :
  <StyledError>
    <ErrorMessage>{error}</ErrorMessage>
    <Button onClick={onDismiss}>Ok</Button>
  </StyledError>

export default Error
