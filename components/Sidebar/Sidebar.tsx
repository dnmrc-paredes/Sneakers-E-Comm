import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './Sidebar.styles'

export const Sidebar = () => {
  return (
    <S.Container>
      <S.Close>
        <Image
          src='/icon-close.svg'
          alt='close button'
          width={20}
          height={20}
        />
      </S.Close>
      <S.Links>
        <Link href='#'> Collections </Link>
        <Link href='#'> Men </Link>
        <Link href='#'> Women</Link>
        <Link href='#'> About </Link>
        <Link href='#'> Contact </Link>
      </S.Links>
    </S.Container>
  )
}
