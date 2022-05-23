import styled from "styled-components";

export const ContainerNewsletter = styled.div`
  width: 100%;
  height: 150px;
  background: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;

  .titleNewsletter{
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
    color: #333333;
    text-align: center;
  }
  .formNewsletter{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }

  input{
    width: 280px;
    height: 48px;
    margin-right: 8px;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #E6E6E6;
  }

  input::placeholder{
    padding: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #585858;
  }

  button{
    width: 140px;
    height: 46px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #FFFFFF;
    background: #000;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px){
    height: auto;
    padding: 30px 0;

    .formNewsletter{
      flex-direction: column; 
      padding: 0;

    .titleNewsletter{
      width: 280px;
      text-align: left;
      font-size: 20px;
    }

      input{
        margin: 10px 0 !important;
      }
    }
  }

`