import React, { useEffect, useState } from 'react'
import { formatPrice } from '../../Helpers/Helpers'
import { Api } from '../../Services/Api'
import {
  ContainerShelf,
  TitleContainerShelf,
  ContainerShelfProducts
} from './style'
import StarRatings from 'react-star-ratings'
import { useCartContext } from '../../Contexts/CartContext/CartContext.provider'

interface InstallmentsProps {
  quantity: number
  value: number
}

function Products() {
  const [data, setData] = useState([])
  const { cartContextDispatch } = useCartContext()

  useEffect(() => {
    ;(async () => {
      const response = await Api.get('/products')
      setData(response.data)
    })()
  }, [])

  const renderDiscount = (discount?: number) => {
    if (discount) {
      return <p className="priceDiscount">de {formatPrice(discount)}</p>
    }
    return <div className="priceDiscountNull" />
  }

  const renderPriceSplit = (installments?: InstallmentsProps[]) => {
    if (!installments || !installments.length)
      return <div className="installmentsNull" />

    return (
      <p className="priceSplit">{`ou em ${
        installments[0].quantity
      }x de ${formatPrice(installments[0].value)}`}</p>
    )
  }

  const handleComprar = (product: any) => {
    let cartValue = localStorage.getItem('cart')
    if (cartValue) {
      let jsonCart = JSON.parse(cartValue)

      console.log(jsonCart)

      let cartAdd = {
        qtd: jsonCart!.qtd + 1,
        products: [...jsonCart.products, product]
      }

      localStorage.setItem('cart', JSON.stringify(cartAdd))

      cartContextDispatch({
        payload: cartAdd,
        type: 'addCart'
      })
    } else {
      let cartAdd = {
        qtd: 1,
        products: [product]
      }

      localStorage.setItem('cart', JSON.stringify(cartAdd))

      cartContextDispatch({
        payload: cartAdd,
        type: 'addCart'
      })
    }
  }

  return (
    <ContainerShelf>
      <TitleContainerShelf>Mais Vendidos</TitleContainerShelf>
      <ContainerShelfProducts>
        {data.map((product: any) => {
          return (
            <div className="productItem" key={product.productId}>
              {product.listPrice && (
                <div className="containerFlagDiscount">
                  <p className="flagTextDiscount">OFF</p>
                  <div className="flagDiscount" />
                </div>
              )}
              <a href={`product/${product.productId}`} target="__blank">
                <img
                  className="imageProducts"
                  src={product.imageUrl}
                  alt="Imagem dos produtos"
                />
              </a>
              <div className="containerPrices">
                <h1 className="titleProduct">{product.productName}</h1>
                <div className="startsRating">
                  <StarRatings
                    rating={product.stars}
                    starDimension="15px"
                    starSpacing="2px"
                    starRatedColor="#F8475F"
                  />
                </div>
                {renderDiscount(product.listPrice)}
                <p className="priceProduct">por {formatPrice(product.price)}</p>
                {renderPriceSplit(product.installments)}
                <button
                  className="buttonBuy"
                  onClick={() => handleComprar(product)}
                >
                  Comprar
                </button>
              </div>
            </div>
          )
        })}
      </ContainerShelfProducts>
    </ContainerShelf>
  )
}

export default Products
