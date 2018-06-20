import * as React from 'react'
import { StatelessComponent } from 'react'

interface EmptyProps {
  text?: string;
}

const Empty: StatelessComponent<EmptyProps> = ({
  text = 'The list is empty',
}) => (
  <div>
    <h4>{text}</h4>
  </div>
)

export default Empty
