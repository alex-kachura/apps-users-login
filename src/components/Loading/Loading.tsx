import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledLoading = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin: 1rem;
  flex-grow: 1;
  color: #363639;
`

const Loading = () => (
  <StyledLoading>
    <FontAwesomeIcon icon="circle-notch" spin />
  </StyledLoading>
)

export default Loading
