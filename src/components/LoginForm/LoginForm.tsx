import * as React from 'react'
import { ChangeEvent, FormEvent, PureComponent } from 'react'
import { isEmpty } from 'lodash'
import styled from 'styled-components'

import Field from '../Field/Field'
import Button from '../Button/Button'
import { AUTH_FIELDS, EMAIL_REGEX, SESSION_EXPIRY } from '../../consts'
import { LoginData } from '../../typings'

const Form = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

interface LoginFormProps {
  isPosting: boolean

  onSubmit(auth: LoginData): void
}

interface LoginErrors {
  email?: string;
  password?: string;
}

interface LoginState {
  email: string;
  password: string;
  errors: LoginErrors;
}

class LoginForm extends PureComponent<LoginFormProps, LoginState> {
  constructor(props: LoginFormProps) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errors: {},
    }
  }

  public render() {
    const { isPosting } = this.props
    const { email, password, errors } = this.state

    return (
      <Form>
        <Field name={AUTH_FIELDS.email} type="email" value={email} error={errors[AUTH_FIELDS.email]}
               onChange={this.handleInputChange} label="Email" />
        <Field name={AUTH_FIELDS.password} type="password" value={password} error={errors[AUTH_FIELDS.password]}
               onChange={this.handleInputChange} label="Password" />
        <Button primary onClick={this.onSubmit}>{isPosting ? 'Logging in...' : 'Log in'}</Button>
      </Form>
    )
  }

  public handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const errors = { ...this.state.errors }

    delete errors[name]

    switch (name) {
      case AUTH_FIELDS.email:
        this.setState({ [AUTH_FIELDS.email]: value, errors })
        break
      case AUTH_FIELDS.password:
        this.setState({ [AUTH_FIELDS.password]: value, errors })
        break
    }
  }

  private onSubmit = (e: FormEvent) => {
    e.preventDefault()

    const { email, password } = this.state
    const errors: LoginErrors = {}

    if (!EMAIL_REGEX.test(email)) {
      errors[AUTH_FIELDS.email] = 'Please enter a valid email'
    }
    if (!password) {
      errors[AUTH_FIELDS.password] = 'Please enter your password'
    }

    if (!isEmpty(errors)) {
      this.setState({
        errors: { ...errors },
      })
      return
    }

    this.setState({
      errors: {},
    })

    return this.props.onSubmit({ email, password, expiry: SESSION_EXPIRY })
  }
}

export default LoginForm
