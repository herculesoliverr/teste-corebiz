import React, { useEffect, useState } from 'react'
import { formatPrice } from '../../Helpers/Helpers'
import { Api } from '../../Services/Api'
import {
  ContainerShelf,
  TitleContainerShelf,
  ContainerShelfProducts
} from './style'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import StarRatings from 'react-star-ratings'

interface InstallmentsProps {
  quantity: number
  value: number
}

function Products() {
  const [data, setData] = useState([])
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

  return (
    <ContainerShelf>
      <TitleContainerShelf>Mais Vendidos</TitleContainerShelf>
      <ContainerShelfProducts>
        {/* <Carousel showStatus={false} centerMode={true}> */}
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
                <button className="buttonBuy">Comprar</button>
              </div>
            </div>
          )
        })}
        {/* </Carousel> */}
      </ContainerShelfProducts>
    </ContainerShelf>
  )
}

export default Products
