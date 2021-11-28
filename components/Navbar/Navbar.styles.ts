import styled from 'styled-components'
import { FONTS } from '../../constants/fonts'

export const S = {
  Container: styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: lightgray solid 1px;
    margin: 0 8rem;
    @media screen and (min-width: 300px) and (max-width: 761px) {
      margin: 0;
    }
    @media screen and (min-width: 912px) and (max-width: 1000px) {
      margin: 0 3rem;
    }
    @media screen and (min-width: 1000px) and (max-width: 1400px) {
      margin: 0 8rem;
    }
  `,
  Logo: styled.div(() => ({
    flex: 1,
    display: 'flex',
    '@media screen and (min-width: 300px) and (max-width: 761px)': {
      marginLeft: '20px',
      img: {
        width: '100px',
      }
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
      },
      '@media screen and (min-width: 300px) and (max-width: 761px)': {
        display: 'none'
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
  ProfileImage: styled.div``
}
