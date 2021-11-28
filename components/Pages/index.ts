import styled from 'styled-components'
import { FONTS } from '../../constants/fonts'
import { COLORS } from '../../constants/colors'
// import { BREAKPOINTS } from '../../utils/breakpoints'

export const Root = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* @media screen and (min-width: 769px) and (max-width: 912px) {
      margin: 0 5rem;
    } */
    @media screen and (min-width: 912px) and (max-width: 1000px) {
      margin: 0 3rem;
    }
    @media screen and (min-width: 1000px) and (max-width: 1400px) {
      margin: 0 8rem;
    }
  `,
  ProductContainer: styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    @media screen and (min-width: 912px) and (max-width: 1400px) {
      flex-direction: row;
    }
  `,
  ImagesContainer: styled.div`
    flex: 1;
    margin: 2rem 0;
    display: flex;
    @media screen and (min-width: 912px) and (max-width: 1279px) {
      flex-direction: column;
      margin: 0;
    }
  `,
  BigImageContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
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
  `,
  ThumbnailContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
    display: none;
  `,
  // Thumbnails: styled.div``,
  InfoContainer: styled.div`
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
  `,
  SmallText: styled.p`
    font-family: ${FONTS.KUMBH_SANS};
    text-transform: uppercase;
    font-weight: 800;
    font-size: 14px;
    color: ${COLORS.ORANGE};
    margin-bottom: 18px;
  `,
  ProductTitle: styled.h1`
    font-family: ${FONTS.KUMBH_SANS};
    font-size: 40px;
    margin-bottom: 22px;
    @media screen and (min-width: 300px) and (max-width: 480px) {
      font-size: 30px;
    }
  `,
  ProductInfo: styled.p`
    font-family: ${FONTS.KUMBH_SANS};
    font-size: 18px;
    color: ${COLORS.LIGHT_GRAY};
    margin-bottom: 20px;
  `,
  Price: styled.p`
    font-family: ${FONTS.NUNITO_SANS};
    font-size: 28px;
    color: black;
    font-weight: 800;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
      color: ${COLORS.ORANGE};
      background-color: ${COLORS.PALE_ORANGE};
      margin-left: 10px;
      padding: 0px 10px;
      font-size: 18px;
      border-radius: 5px;
    }
  `,
  Discount: styled.p`
    margin-top: 10px;
    text-decoration: line-through;
    font-family: ${FONTS.NUNITO_SANS};
    font-weight: 800;
    color: hsl(220, 14%, 75%);
  `,
  ButtonContainer: styled.div`
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
  `,
  Buttons: styled.div`
    flex: 1;
    display: flex;
    border-radius: 10px;
    background-color: hsl(223, 64%, 98%);
    width: 100%;
  `,
  Count: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: ${FONTS.KUMBH_SANS};
    font-weight: 800;
  `,
  Minus: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  `,
  Plus: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    padding: 20px 0;
  `,
  AddToCart: styled.button`
    flex: 2;
    background-color: ${COLORS.ORANGE};
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 13px;
    border-radius: 12px;
    border: none;
    outline: none;
    font-family: ${FONTS.KUMBH_SANS};
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
}
