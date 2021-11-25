import styled from 'styled-components'
import { FONTS } from '../../constants/fonts'

export const S = {
  Container: styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: lightgray solid 1px;
    margin: 0 8rem;
  `,
  Logo: styled.div(() => ({
    flex: 1,
    display: 'flex',
    h1: {
      fontFamily: FONTS.KUMBH_SANS,
      fontWeight: 700
    }
  })),
  Links: styled.div(() => ({
    flex: 2,
    display: 'flex',
    justifyContent: 'space-between',
    a: {
      fontFamily: FONTS.KUMBH_SANS,
      textDecoration: 'none',
      color: 'gray',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '5px solid transparent',
      transitionProperty: 'all',
      transitionDuration: '0.5s',
      '&:hover': {
        fontWeight: 700,
        color: 'black',
        borderBottom: '5px solid hsl(26, 100%, 55%)'
      }
    }
  })),
  CartAndProfile: styled.div`
    flex: 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  CartImage: styled.div`
    margin-right: 2rem;
  `,
  ProfileImage: styled.div`
  
  `
}
