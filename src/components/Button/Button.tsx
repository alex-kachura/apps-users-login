import * as React from 'react'
import { MouseEvent, StatelessComponent } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  user-select: none;
  cursor: pointer;
  border-radius: 1.5rem;
  padding: .14rem 0.4rem;
  color: #16161f;
  background-color: #ffffff;

  &:hover {
    background-color: #f5f5f5;
  }
`

const StyledButtonPrimary = StyledButton.extend`
  font-size: 1.1rem;
  margin-top: 3rem;
  padding: 1rem 1.9rem;
  width: 100%;
  color: #ffffff;
  background-color: #4290fa;

  &:hover {
    background-color: #3771ca;
  }
`

interface ButtonProps {
  primary?: boolean;

  onClick?(e: MouseEvent<HTMLElement>): void
}

const Button: StatelessComponent<ButtonProps> = ({ primary, ...props }) => primary ?
  <StyledButtonPrimary {...props} /> :
  <StyledButton {...props} />

export default Button