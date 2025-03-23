import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const S = {
  Container: styled.div`
    position: fixed;
    top: 0;
    height: 100%;
    background-color: white;
    z-index: 20;
    display: flex;
    flex-direction: column;
    width: 250px;
  `,
  Close: styled.div`
    display: flex;
    padding: 1.5rem 0;
    margin-left: 25px;

    img {
      cursor: pointer;
    }
  `,
  Links: styled.div`
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
  `,
  LinkBox: styled.div`
    margin: 10px 0;
    border-left: 6px transparent solid;
    transition-property: all;
    transition-duration: 0.5s;

    &:hover {
      border-left: 6px ${({ theme }) => theme.colors.orange} solid;
    }
  `
}

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
