import styled from 'styled-components'
import IconSearch from '../../Assets/imgs/search.png'

export const HeaderContainer = styled.header`
width: 100%;
height: 80px;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
position: relative;

.formSearchMobile{
  display: none;
}

@media(max-width: 768px){
  height: 120px;

  .formSearchDesktop{
    display: none;
  }
  .formSearchMobile{
    position: absolute;
    bottom: 10px;
    width: 95%;
  }
}
`
export const HeaderItens = styled.div`
width: 60%;
display: flex;
align-items: flex-end;
justify-content: space-between;

.iconMenu{
  display: none;
}
.LogoCorebiz{
  height: 41px;
}
.ItensRight{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

@media(max-width: 768px){
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 95%;

  .LogoCorebiz{
    height: 30px;
  }
  .iconMenu{
    display: block;
    padding-bottom: 5px;
  }
}
`

export const MyAccount = styled.div`
display: flex;
justify-content: center;
align-items: end;
gap: 10px;

.MyAccountText{
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #7A7A7A;
}

@media(max-width: 768px){
  display: none;
}

`

export const FormSearch = styled.form`
  width: 50%;

.SearchInput{
  background-image: url(${IconSearch});
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: bottom 8px right 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #7A7A7A;
  width: 100%;
  padding-bottom: 8px;
  border: none;
  outline: none;
  border-bottom: 1px solid #7A7A7A;
}

@media(max-width: 768px){
  display: flex;
  flex-direction: column;
}

`

export const Cart = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;

.CountCart{
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  background: #F8475F;
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  width: 14px;
  height: 14px;
}
`