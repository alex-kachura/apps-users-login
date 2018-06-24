import * as React from 'react'
import { ChangeEvent, StatelessComponent } from 'react'
import styled from 'styled-components'

import Input from '../Input/Input'

const StyledField = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  line-height: 1.3rem;
   
  & + label {
    margin-top: 2rem;
  }
`
const ErrorMessage = styled.span`
  font-size: .9rem;
  line-height: 2rem;
  color: #d0021b;
`

interface FieldProps {
  name: string
  label: string
  error?: string
  type?: string
  value: string | number
  placeholder?: string

  onChange?(event: ChangeEvent<HTMLInputElement>): void
}

const Field: StatelessComponent<FieldProps> = ({
  label,
  error = '',
  ...props
}) =>
  <StyledField>
    {label}
    <Input {...props} invalid={error} />
    <ErrorMessage>{error}</ErrorMessage>
  </StyledField>


export default Field
