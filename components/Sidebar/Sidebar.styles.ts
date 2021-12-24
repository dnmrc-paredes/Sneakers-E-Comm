import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  background-color: white;
  z-index: 20;
  display: flex;
  flex-direction: column;
  width: 250px;
`

export const Close = styled.div`
  display: flex;
  padding: 1.5rem 0;
  margin-left: 25px;

  img {
    cursor: pointer;
  }
`

export const Links = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  a {
    margin: 10px 18px;
    font-family: ${({ theme }) => theme.fonts.kumbh};
    color: black;
    text-decoration: none;
    font-weight: 800;
  }
`

export const LinkBox = styled.div`
  margin: 10px 0;
  border-left: 6px transparent solid;
  transition-property: all;
  transition-duration: 0.5s;

  &:hover {
    border-left: 6px ${({ theme }) => theme.colors.orange} solid;
  }
`
