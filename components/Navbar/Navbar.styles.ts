import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: lightgray solid 1px;
  margin: 0 8rem;
  @media screen and (min-width: 300px) and (max-width: 768px) {
    margin: 0;
    height: 70px;
    border: none;
  }
  @media screen and (min-width: 769px) and (max-width: 911px) {
    margin: 0 3rem;
    height: 70px;
    border: none;
  }
  @media screen and (min-width: 912px) and (max-width: 1000px) {
    margin: 0 3rem;
  }
  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    margin: 0 8rem;
  }
`

export const Logo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 300px) and (max-width: 761px) {
    margin-left: 20px;
  }
`

export const Links = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  a {
    font-family: ${({ theme }) => theme.fonts.kumbh};
    text-decoration: none;
    color: gray;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 5px solid transparent;
    transition-property: all;
    transition-duration: 0.5s;
    &:hover {
      font-weight: 700;
      color: black;
      border-bottom: 5px solid hsl(26, 100%, 55%);
    }
  }
  @media screen and (min-width: 300px) and (max-width: 761px) {
    display: none;
  }
`

export const CartAndProfile = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (min-width: 300px) and (max-width: 761px) {
    margin-right: 10px;
  }
  @media screen and (min-width: 762px) and (max-width: 1000px) {
    flex: 1;
  }
  @media screen and (min-width: 1000px) and (max-width: 1400px) {
    flex: 2.5;
  }
`

export const CartImage = styled.div`
  margin-right: 2rem;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 300px) and (max-width: 761px) {
    margin-right: 1.3rem;
  }
`

export const ProfileImage = styled.div``
