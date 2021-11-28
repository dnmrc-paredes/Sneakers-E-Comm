import styled from 'styled-components'
import { FONTS } from '../../constants/fonts'
import { COLORS } from '../../constants/colors'

export const Root = {
  Container: styled.div``,
  ProductContainer: styled.div`
    @media screen and (min-width: 300px) and (max-width: 480px) {
      padding: 20px 0;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      padding: 20px 0;
    }
  `,
  ImagesContainer: styled.div`
    @media screen and (min-width: 300px) and (max-width: 480px) {
      margin: 2rem 0;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      margin: 2rem 0;
    }
  `,
  ThumbnailContainer: styled.div`
    /* flex: 2; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
    /* background-color: yellow; */
    /* width: 100%; */
    img {
      border: solid transparent 0px;
      border-radius: 15px;
      cursor: pointer;

      &:hover {
        border: solid ${COLORS.ORANGE} 3px;
      }
    }
  `,
  Thumbnails: styled.div`
    /* border-radius: 20px;
    border: 3px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    &:hover {
      border: solid 3px ${COLORS.ORANGE};
      background-color: rgba(255, 255, 255, );
    } */
  `,
  InfoContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1rem;
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
    @media screen and (min-width: 300px) and (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }
  `,
  Buttons: styled.div`
    flex: 1;
    display: flex;
    border-radius: 10px;
    background-color: hsl(223, 64%, 98%);
    @media screen and (min-width: 300px) and (max-width: 480px) {
      width: 100%;
      height: 100px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 100%;
      height: 100px;
    }
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
    @media screen and (min-width: 300px) and (max-width: 480px) {
      height: 55px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      height: 55px;
    }
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
    @media screen and (min-width: 300px) and (max-width: 480px) {
      height: 55px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      height: 55px;
    }
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
    @media screen and (min-width: 300px) and (max-width: 480px) {
      margin-top: 15px;
      padding: 20px 0;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
      margin-top: 15px;
      padding: 20px 0;
    }
  `
}
