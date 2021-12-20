import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 912px) and (max-width: 1000px) {
    margin: 0 3rem;
  }
  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    margin: 0 8rem;
  }
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  @media screen and (min-width: 300px) and (max-width: 768px) {
    padding: 0 0 20px 0;
  }
  @media screen and (min-width: 769px) and (max-width: 911px) {
    padding: 20px 0;
  }
  @media screen and (min-width: 912px) and (max-width: 1400px) {
    flex-direction: row;
    padding: 20px 0;
  }
`

export const ImagesContainer = styled.div`
  flex: 1;
  margin: 60px 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 0px) and (max-width: 650px) {
    margin: 0 0 2rem 0;
  }
  @media screen and (min-width: 651px) and (max-width: 911px) {
    margin: 2rem 0;
  }
  @media screen and (min-width: 912px) and (max-width: 1279px) {
    flex-direction: column;
    margin: 2rem 0;
  }
`

export const BigImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    cursor: pointer;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin: 0 5rem;
    img {
      border-radius: 15px;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 912px) {
    margin: 0 5rem;
    img {
      border-radius: 15px;
    }
  }
  @media screen and (min-width: 912px) and (max-width: 1400px) {
    margin: 0;
    img {
      border-radius: 15px;
    }
  }
`

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 23px;
  img {
    border-radius: 15px;
  }
  @media screen and (min-width: 0px) and (max-width: 650px) {
    display: none;
  }
`

export const Thumbnails = styled.div`
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid transparent 3px;
  overflow: hidden;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    border: solid 3px ${({ theme }) => theme.colors.orange};
  }
`

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 1rem;
  @media screen and (min-width: 769px) and (max-width: 912px) {
    margin: 0 2rem;
  }
  @media screen and (min-width: 912px) and (max-width: 1400px) {
    margin: 0 3rem;
  }
`

export const SmallText = styled.p`
  font-family: ${({ theme }) => theme.fonts.kumbh};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 18px;
`

export const ProductTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.kumbh};
  font-size: 40px;
  margin-bottom: 22px;
  @media screen and (min-width: 300px) and (max-width: 480px) {
    font-size: 30px;
  }
`

export const ProductInfo = styled.p`
  font-family: ${({ theme }) => theme.fonts.kumbh};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light_gray};
  margin-bottom: 20px;
`

export const Price = styled.p`
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-size: 28px;
  color: black;
  font-weight: 800;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span {
    margin-left: 10px;
    padding: 0px 10px;
    font-size: 18px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.orange};
    background-color: hsl(25, 100%, 94%);
  }
`

export const Discount = styled.p`
  margin-top: 10px;
  text-decoration: line-through;
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-weight: 800;
  color: hsl(220, 14%, 75%);
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media screen and (min-width: 769px) and (max-width: 912px) {
    flex-direction: row;
  }
  @media screen and (min-width: 912px) and (max-width: 1400px) {
    flex-direction: row;
  }
`

export const Buttons = styled.div`
  flex: 1;
  display: flex;
  border-radius: 10px;
  background-color: hsl(223, 64%, 98%);
  width: 100%;
`

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.kumbh};
  font-weight: 800;
`

export const Minus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const Plus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding: 20px 0;
`

export const AddToCart = styled.button`
  flex: 2;
  background-color: ${({ theme }) => theme.colors.orange};
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 13px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-family: ${({ theme }) => theme.fonts.kumbh};
  font-weight: 800;
  color: white;
  cursor: pointer;
  padding: 17px 0;
  margin-top: 18px;
  @media screen and (min-width: 769px) and (max-width: 912px) {
    margin-top: 0;
  }
  @media screen and (min-width: 912px) and (max-width: 1400px) {
    margin-top: 0;
  }
`
