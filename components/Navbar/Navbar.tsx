import React from 'react'
import { S } from './Navbar.styles'
import Link from 'next/link'
import { IoCartOutline } from 'react-icons/io5'
import Image from 'next/image'
import Avatar from '../../public/image-avatar.png'

export const Navbar = () => {
  return (
    <S.Container>
      <S.Logo>
        <h1> sneakers </h1>
      </S.Logo>
      <S.Links>
        <Link href='#'> Collections </Link>
        <Link href='#'> Men </Link>
        <Link href='#'> Women </Link>
        <Link href='#'> About </Link>
        <Link href='#'> Contact </Link>
      </S.Links>
      <S.CartAndProfile>
        <S.CartImage>
          <IoCartOutline size={25} />
        </S.CartImage>
        <S.ProfileImage>
          <Image height={45} width={45} src={Avatar} alt='Profile' />
        </S.ProfileImage>
      </S.CartAndProfile>
    </S.Container>
  )
}
