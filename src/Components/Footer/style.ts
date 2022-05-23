import styled from "styled-components";


export const ContainerFooter = styled.div`
  width: 100%;
  height: 213px;
  background: #000;

  .mainGrid{
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .childrenGrid{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  @media(max-width: 768px){
    height: auto;
    background-color: #000;
    padding-bottom: 50px;
    .mainGrid{
      grid-template-columns: 1fr;
    }
  }
`

export const ContainerAddress = styled.div`
  .addressTitle{
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 35px;
  }

  .addressTitle::after{
    background-color: #fff;;
    content: "";
    display: flex;
    height: 5px;
    width: 45px;
    position: relative;
    top: 15px;
  }

  .addressFooter{
    max-width: 230px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: #FFFFFF;
  }
`

export const ContainerContacts = styled.div`
  .contact{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 195px;
    height: 38px;
    border-radius: 5px;
    margin-bottom: 25px;

    p{
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #000;
      text-transform: uppercase;
      padding-left: 10px;
    }
  }

  .consult{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 195px;
    height: 38px;
    border-radius: 5px;

    p{
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #000;
      text-transform: uppercase;
      max-width: 130px;
      padding-left: 10px;
    }
  }
`