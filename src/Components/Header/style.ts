import styled from 'styled-components'
import IconSearch from '../../Assets/imgs/search.png'

export const HeaderContainer = styled.header`
width: 100%;
height: 80px;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
`
export const HeaderItens = styled.div`
width: 60%;
display: flex;
align-items: flex-end;
justify-content: space-between;

.LogoCorebiz{
  height: 41px;
}
.ItensRight{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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