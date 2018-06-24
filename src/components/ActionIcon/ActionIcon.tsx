import * as React from 'react'
import { HTMLAttributes, StatelessComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface ActionIconProps extends HTMLAttributes<HTMLElement> {
  icon: IconProp

  action(...args: any[]): any
}

const ActionIcon: StatelessComponent<ActionIconProps> = ({ action, icon }, ...props: any[]) => {
  return (
    <a onClick={action} {...props}>
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default ActionIcon
