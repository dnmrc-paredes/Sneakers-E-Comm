import styled from 'styled-components'
import { FONTS } from '../../constants/fonts'
import { COLORS } from '../../constants/colors'

export const Root = {
  Container: styled.div`
    margin: 0 8rem;
  `,
  ProductContainer: styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
  `,
  ImagesContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      border-radius: 15px;
      margin: auto 0px;
    }
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
    align-items: center;
    margin-top: 25px;
    justify-content: space-between;
  `,
  Buttons: styled.div`
    flex: 1;
    display: flex;
    height: 50px;
    width: 130px;
    border-radius: 10px;
    background-color: hsl(223, 64%, 98%);
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
  `,
  AddToCart: styled.button`
    flex: 2;
    background-color: ${COLORS.ORANGE};
    width: 100%;
    height: 50px;
    margin: 0 13px;
    border-radius: 12px;
    border: none;
    outline: none;
    font-family: ${FONTS.KUMBH_SANS};
    font-weight: 800;
    color: white;
    cursor: pointer;
  `
}
