import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Home } from '../Pages/Home'

const Routes = () => useRoutes([{ path: '/', element: <Home /> }])

export function Routing() {
  return <Routes />
}
