import styled from 'styled-components'
import { FONTS } from '../../constants/fonts'
import { COLORS } from '../../constants/colors'

export const Root = {
  Container: styled.div`
    margin: 0 8rem;
  `,
  ProductContainer: styled.div`
    display: flex;
    /* background-color: red; */
    min-height: 100vh;
    align-items: center;
  `,
  ImagesContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    /* background-color: red; */
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
    /* background-color: yellow; */
    margin: 0 1rem;
  `,
  SmallText: styled.p`
    font-family: ${FONTS.KUMBH_SANS};
    text-transform: uppercase;
    font-weight: 800;
    font-size: 14px;
    color: ${COLORS.ORANGE};
    margin-bottom: 18px;
    /* margin: 0 80px 18px 80px; */
  `,
  ProductTitle: styled.h1`
    font-family: ${FONTS.KUMBH_SANS};
    font-size: 40px;
    margin-bottom: 22px;
    /* margin: 0 80px 22px 80px; */
  `,
  ProductInfo: styled.p`
    font-family: ${FONTS.KUMBH_SANS};
    font-size: 18px;
    color: ${COLORS.LIGHT_GRAY};
    margin-bottom: 20px;
    /* margin: 0 80px 20px 80px; */
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
    /* margin: 0 80px 18px 80px; */
  `,
  ButtonGroup: styled.div`

  `
}
