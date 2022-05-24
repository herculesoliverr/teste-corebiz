import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Api } from '../../Services/Api'
import { ContainerNewsletter } from './style'

interface IFormValueProps {
  value: string
  key: string
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
      value: '',
      key: 'email'
    },
    name: {
      error: false,
      errorMessage: '',
      value: '',
      key: 'name'
    }
  })

  const [formSubmited, setFormSubmited] = useState<boolean>(false)

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
            value: value
          }
        }
      })
    },
    []
  )

  const validateForm = (form: IFormState): boolean => {
    let errorValue = false

    Object.values(form).forEach((objectValue: IFormValueProps) => {
      if (objectValue.value === '' || !objectValue.value) {
        setFormState((oldValue: IFormState) => {
          return {
            ...oldValue,
            [objectValue.key]: {
              ...oldValue[objectValue.key],
              error: true,
              errorMessage: 'Campo obrigatório ' + objectValue.key
            }
          }
        })

        errorValue = true
      }
    })

    if (errorValue) return errorValue

    if (!REGEXVALIDATEEMAIL.test(form.email.value)) {
      setFormState((oldValue: IFormState) => {
        return {
          ...oldValue,
          email: {
            ...oldValue.email,
            error: true,
            errorMessage: 'E-mail inválido.'
          }
        }
      })

      return false
    }

    return true
  }

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()

      if (!validateForm(formState)) return

      const response = await Api.post('newsletter', {
        email: formState.email.value,
        name: formState.name.value
      })

      console.log(response)

      if (response) {
        setFormSubmited(true)
      }
    },
    [formState]
  )

  return (
    <ContainerNewsletter>
      {formSubmited ? (
        <div className="containerSubmited">
          <p className="titleSubmited">Seu e-mail foi cadastrado com sucesso</p>
          <p className="textSubmited">
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </p>
          <button className="buttonSubmited">Cadastrar novo e-mail</button>
        </div>
      ) : (
        <div>
          <h3 className="titleNewsletter">
            Participe de nossas news com promoções e novidades!
          </h3>
          <form onSubmit={handleSubmit} className="formNewsletter">
            <div className="containerInput">
              <input
                type="text"
                className={`${formState.name.error ? 'inputError' : ''}`}
                name="name"
                value={formState.name.value}
                onChange={handleUpdateFormValue}
                id="name"
                placeholder="Digite seu nome"
              />
              {formState.name.error ? (
                <small className="errorMessage">
                  {formState.name.errorMessage}
                </small>
              ) : (
                false
              )}
            </div>
            <div className="containerInput">
              <input
                type="email"
                className={`${formState.name.error ? 'inputError' : ''}`}
                value={formState.email.value}
                name="email"
                onChange={handleUpdateFormValue}
                placeholder="Digite seu email"
              />
              {formState.email.error ? (
                <small className="errorMessage">
                  {formState.email.errorMessage}
                </small>
              ) : (
                false
              )}
            </div>
            <button
              disabled={
                formState.email.error || formState.name.error ? true : false
              }
              type="submit"
            >
              Eu quero
            </button>
          </form>
        </div>
      )}
    </ContainerNewsletter>
  )
}

export default Newsletter
