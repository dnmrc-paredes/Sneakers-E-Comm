import React, { useState, Dispatch, SetStateAction } from 'react'
import * as S from './Navbar.styles'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'
import { Cart } from '../Pages/Cart'
import Image from 'next/image'
import Avatar from '../../public/image-avatar.png'
import Logo from '../../public/logo.svg'
import { IoMenu } from 'react-icons/io5'
import { useWindow } from '../../hooks/useWindow'

type NavbarProps = {
  cartItems: number
  setCartItems: Dispatch<SetStateAction<number>>
}

export const Navbar = ({ cartItems, setCartItems }: NavbarProps) => {
  const [cart, setCart] = useState(false)
  const width = useWindow()

  const isSmall = () => (width.width as number) < 761

  return (
    <S.Container>
      <S.Logo>
        {isSmall() ? (
          <IoMenu style={{ marginRight: '20px' }} size={35} />
        ) : null}
        <Image layout='fixed' src={Logo} height={20} width={140} alt='Logo' />
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
            onClick={() => setCart((prev) => !prev)}
            size={25}
          />
          {cart ? <Cart setCartItems={setCartItems} cartItems={cartItems} /> : null}
        </S.CartImage>
        <S.ProfileImage>
          <Image
            height={isSmall() ? 30 : 45}
            width={isSmall() ? 30 : 45}
            src={Avatar}
            alt='Profile'
          />
        </S.ProfileImage>
      </S.CartAndProfile>
    </S.Container>
  )
}
