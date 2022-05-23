import { BrowserRouter } from 'react-router-dom'
import { Routing } from './Routes/Routes'
import { CartContextProvider } from './Contexts/CartContext/CartContext.provider'

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routing />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
