import React, { useState, Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { IoCartOutline, IoMenu } from 'react-icons/io5'
import { Cart } from '../Cart/Cart'
import Image from 'next/image'
import { useWindow } from '../../hooks/useWindow'
import styled from 'styled-components'
import { breakpoints } from '../../styles'
import { createPortal } from 'react-dom'

const S = {
  Root: styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Container: styled.div`
    height: 100px;
    display: flex;
    width: 100%;
    max-width: 1440px;
    align-items: center;
    border-bottom: lightgray solid 1px;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
    padding: 0 20px;
  `,
  Logo: styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  Links: styled.div`
    flex: 2;
    display: none;
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

    @media (min-width: ${breakpoints.lg}) {
      display: flex;
    }
  `,
  CartAndProfile: styled.div`
    flex: 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (min-width: ${breakpoints.md}) {
      margin-right: 10px;
    }
    @media (min-width: ${breakpoints.lg}) {
      flex: 1;
    }
    @media (min-width: ${breakpoints.xl}) {
      flex: 2.5;
    }
  `,
  CartImage: styled.div`
    margin-right: 2rem;
    position: relative;
    background-color: transparent;

    @media (min-width: ${breakpoints.md}) {
      margin-right: 1.3rem;
    }
  `,
  Holder: styled.div`
    border: solid transparent 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    cursor: pointer;

    &:hover {
      border: solid ${({ theme }) => theme.colors.orange} 2px;
    }
  `
}

const CartComponent = ({
  handleToggleCart
}: {
  handleToggleCart: () => void
}) => {
  const { width } = useWindow()
  const isSmall = (width as number) < 768
  return isSmall ? (
    createPortal(<Cart handleToggleCart={handleToggleCart} />, document.body)
  ) : (
    <Cart handleToggleCart={handleToggleCart} />
  )
}

type NavbarProps = {
  setShowMenu: Dispatch<SetStateAction<boolean>>
}

export const Navbar = ({ setShowMenu }: NavbarProps) => {
  const [isCart, setIsCart] = useState(false)
  const { width } = useWindow()
  const isSmall = (width as number) < 1279

  const handleToggle = () => setShowMenu(prev => !prev)
  const handleToggleCart = () => setIsCart(prev => !prev)

  return (
    <S.Root>
      <S.Container>
        <S.Logo>
          {isSmall ? (
            <IoMenu
              onClick={handleToggle}
              style={{ marginRight: '20px', cursor: 'pointer' }}
              size={35}
            />
          ) : null}
          <Image src='/logo.svg' height={20} width={140} alt='Logo' />
        </S.Logo>
        <S.Links>
          <Link href='#'> Collections </Link>
          <Link href='#'> Men </Link>
          <Link href='#'> Women</Link>
          <Link href='#'> About </Link>
          <Link href='#'> Contact </Link>
        </S.Links>
        <S.CartAndProfile>
          <S.CartImage>
            <IoCartOutline
              style={{ cursor: 'pointer' }}
              onClick={handleToggleCart}
              size={25}
            />
            {isCart ? (
              <CartComponent handleToggleCart={handleToggleCart} />
            ) : null}
          </S.CartImage>
          <div>
            <S.Holder>
              <Image
                height={isSmall ? 30 : 45}
                width={isSmall ? 30 : 45}
                src="/image-avatar.png"
                alt='Profile'
              />
            </S.Holder>
          </div>
        </S.CartAndProfile>
      </S.Container>
    </S.Root>
  )
}
