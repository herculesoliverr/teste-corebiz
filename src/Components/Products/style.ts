import styled from "styled-components";

export const ContainerShelf = styled.div`
  max-width: 1200px;
  margin: 20px auto 0;
  height: 470px;
`

export const TitleContainerShelf = styled.h1`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 27px;
  color: #000;

  &::after{
    background-color: #C0C0C0;;
    content: "";
    display: flex;
    height: 5px;
    width: 60px;
  }
`

export const ContainerShelfProducts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;


  .containerFlagDiscount{
    width: 100%;
    position: relative;
    
      .flagDiscount{
      width: 0; 
      height: 0; 
      border-top: 45px solid transparent;
      border-bottom: 45px solid transparent;
      border-left: 45px solid #F8475F;
      transform: rotate(-45deg);
      position: absolute;
      right: 0;
      top: 0;
      z-index: 4;
    }

    .flagTextDiscount{
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      line-height: 22px;
      color: #fff;
      position: absolute;
      top: 40px;
      right: 10px;
      z-index: 5;
    }
  }

  .productItem{
    width: 215px;
    height: 350px;
  }

  .titleProduct{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #7A7A7A;
  }

  .containerPrices{
    padding: 20px 0px;
    transition: all 0.3s ease;
    &:hover{
    background-color: #E6E8EA;
      .buttonBuy{
        opacity: 1;
        transition: all 0.3s ease;        
      }
    }

    .startsRating{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .priceDiscount{
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #7A7A7A;
      text-decoration-line: line-through;
      padding: 3px 0;
    }

    .priceDiscountNull{
      height: 24px;
    }

    .installmentsNull{
      height: 12px;
    }

    .priceProduct{
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      color: #000;
    }

    .priceSplit{
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 15px;
      text-align: center;
      color: #7A7A7A;
    }

    .buttonBuy{
      width: 125px;
      height: 32px;
      background: #000;
      border-radius: 5px;
      color: #fff;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px auto;
      opacity: 0;
      cursor: pointer;
    }
} 
`