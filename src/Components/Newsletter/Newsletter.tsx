import React from 'react'
import { ContainerNewsletter } from './style'

function Newsletter() {
  return (
    <ContainerNewsletter>
      <div>
        <h3 className="titleNewsletter">
          Participe de nossas news com promoções e novidades!
        </h3>
        <form action="" className="formNewsletter">
          <input
            type="text"
            name="Name"
            id="name"
            placeholder="Digite seu nome"
          />
          <input type="email" placeholder="Digite seu email" />
          <button type="submit">Eu quero</button>
        </form>
      </div>
    </ContainerNewsletter>
  )
}

export default Newsletter
