import * as React from 'react'
import { ChangeEvent, StatelessComponent } from 'react'
import styled from 'styled-components'

interface InputProps {
  value: string | number;
  name?: string;
  type?: string;
  placeholder?: string;
  invalid?: string | boolean;

  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

const StyledInput = styled.input`
  font-size: 1.25rem;
  padding: .75rem .75rem .75rem .275rem;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${({ invalid }: InputProps) => invalid ? '#d0021b' : '#d6d7de'};

  &:focus {
    outline: none;
    border-color: #4290fa;
  }
`

const Input: StatelessComponent<InputProps> = ({ ...props }) => (
  <StyledInput {...props} />
)

export default Input
