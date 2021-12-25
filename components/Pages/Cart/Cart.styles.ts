import styled from 'styled-components'

export const Root = styled.div`
  position: absolute;
  width: 340px;
  top: 50px;
  right: -120px;
  box-shadow: 2px 10px 34px -2px rgba(191, 191, 191, 0.75);
  z-index: 10;
  border-radius: 8px;
  @media screen and (min-width: 300px) and (max-width: 550px) {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    transform: none;
    width: 100%;
    height: max-content;
    box-shadow: none;
  }
  @media screen and (min-width: 551px) and (max-width: 768px) {
    right: -20px;
  }
  @media screen and (min-width: 769px) and (max-width: 1000px) {
    right: -60px;
  }
`

export const SubRoot = styled.div`
  border-radius: 8px;
  background-color: white;
  @media screen and (min-width: 300px) and (max-width: 550px) {
    margin: 20px 10px;
    background-color: white;
    box-shadow: 2px 10px 34px -2px rgba(97, 97, 97, 0.75);
  }
`

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: solid #c4c3c3 1px;

  h4 {
    margin: 0.5rem 1rem;
    font-family: ${({ theme }) => theme.fonts.kumbh};
  }
`

export const ItemsContainer = styled.div`
  flex: 2;
  display: flex;
  padding: 1rem 0;
  margin: 0.5rem 1rem;

  h4 {
    margin: auto;
    font-family: ${({ theme }) => theme.fonts.kumbh};
    color: ${({ theme }) => theme.colors.light_gray};
  }
`

export const Item = styled.div`
  display: flex;

  img {
    border-radius: 5px;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
`

export const Info = styled.div`
  flex: 2;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  .info {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h4,
    p {
      font-family: ${({ theme }) => theme.fonts.kumbh};
      font-weight: 400;

      span {
        font-weight: 800;
      }
    }
  }
  .delete {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  height: 50px;
  width: 90%;
  margin: 0.5rem 1rem;
  border: none;
  outline: none;
  font-family: ${({ theme }) => theme.fonts.kumbh};
  font-weight: 700;
  letter-spacing: 1px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 15px;
`
