import styled from "styled-components";

export const ContainerNewsletter = styled.div`
  width: 100%;
  height: 150px;
  background: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;

  .containerInput {
    display: flex;
    position: relative;
    flex-direction: column;

    .errorMessage {
      color: red;
      position: absolute;
      bottom: -20px;
      left: 0;

    }
  }

  .inputError {
    border: 1px solid red;
  }

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

  .containerSubmited{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .titleSubmited{
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
    }

    .textSubmited{
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
    }

    .buttonSubmited{
      margin-top: 20px;
      width: 300px;
    }
  }

  @media (max-width: 768px){
    height: auto;
    padding: 30px 0;


    .containerInput {
      margin-bottom: 15px;

      .errorMessage {
        position: initial !important;
      }
    }

    .titleNewsletter{
      width: 280px;
      text-align: left;
      font-size: 20px;
    }

    .formNewsletter{
      flex-direction: column; 
      padding: 0;


      input{
        margin: 10px 0 !important;
      }
    }
  }

`