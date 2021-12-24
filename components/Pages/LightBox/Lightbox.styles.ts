import styled from 'styled-components'

export const Root = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div``

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  @media screen and (min-width: 0px) and (max-width: 500px) {
    margin: 0 20px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 500px) and (max-width: 650px) {
    margin-bottom: 10px;
  }
`

export const BigImage = styled.div`
  position: relative;
  img {
    border-radius: 15px;
  }
  @media screen and (min-width: 0px) and (max-width: 500px) {
    margin: 0 25px;
  }
`

export const PrevButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 25px;
  padding: 8px;
  border: none;
  left: -5%;
  z-index: 2;
  top: 45%;
  cursor: pointer;
`

export const NextButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 25px;
  padding: 8px;
  border: none;
  position: absolute;
  right: -5%;
  z-index: 2;
  top: 45%;
  cursor: pointer;
`
