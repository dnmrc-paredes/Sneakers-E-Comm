import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './Sidebar.styles'

type SidebarProps = {
  setShowMenu: Dispatch<SetStateAction<boolean>>
}

export const Sidebar = ({ setShowMenu }: SidebarProps) => {
  return (
    <S.Container>
      <S.Close>
        <Image
          src='/icon-close.svg'
          alt='close button'
          width={13}
          height={13}
          onClick={() => setShowMenu(prev => !prev)}
        />
      </S.Close>
      <S.Links>
        <S.LinkBox>
          <Link href='#'> Collections </Link>
        </S.LinkBox>
        <S.LinkBox>
          <Link href='#'> Men </Link>
        </S.LinkBox>
        <S.LinkBox>
          <Link href='#'> Women</Link>
        </S.LinkBox>
        <S.LinkBox>
          <Link href='#'> About </Link>
        </S.LinkBox>
        <S.LinkBox>
          <Link href='#'> Contact </Link>
        </S.LinkBox>
      </S.Links>
    </S.Container>
  )
}
