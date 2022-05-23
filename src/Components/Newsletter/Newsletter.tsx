import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Api } from '../../Services/Api'
import { ContainerNewsletter } from './style'

interface IFormValueProps {
  value: string
  error: boolean
  errorMessage: string
}
interface IFormState {
  [key: string]: any
  email: IFormValueProps
  name: IFormValueProps
}

const REGEXVALIDATEEMAIL =
  /^[a-zA-Z0-9.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

function Newsletter() {
  const [formState, setFormState] = useState<IFormState>({
    email: {
      error: false,
      errorMessage: '',
      value: ''
    },
    name: {
      error: false,
      errorMessage: '',
      value: ''
    }
  })

  const handleUpdateFormValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value, name }
      } = e

      if (!name) return

      setFormState((oldValue: IFormState) => {
        return {
          ...oldValue,
          [name]: {
            ...oldValue[name],
            value
          }
        }
      })
    },
    []
  )

  const validateForm = (form: IFormState): boolean => {
    if (!form.email.value || !form.name.value) return false

    if (!REGEXVALIDATEEMAIL.test(form.email.value)) return false

    return true
  }

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm(formState)) return

    const response = await Api.post('newsletter', {
      email: formState.email.value,
      name: formState.name.value
    })
  }, [])

  return (
    <ContainerNewsletter>
      <div>
        <form action="" onSubmit={handleSubmit} className="formNewsletter">
          <h3 className="titleNewsletter">
            Participe de nossas news com promoções e novidades!
          </h3>
          <input
            type="text"
            name="name"
            value={formState.name.value}
            onChange={handleUpdateFormValue}
            id="name"
            placeholder="Digite seu nome"
          />
          <input
            type="email"
            value={formState.email.value}
            name="email"
            onChange={handleUpdateFormValue}
            placeholder="Digite seu email"
          />
          <button type="submit">Eu quero</button>
        </form>
      </div>
    </ContainerNewsletter>
  )
}

export default Newsletter
