import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { IMAGES } from '../../data/images'
import styled from 'styled-components'

const S = {
  ThumbnailContainer: styled.ul`
    display: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 23px;
    padding: 0 20px;

    img {
      border-radius: 15px;
    }
  `,
  Thumbnails: styled.li<{ $isActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;

    button {
      cursor: pointer;
      border: ${({ $isActive, theme }) =>
        `solid 3px ${$isActive ? theme.colors.orange : 'transparent'}`};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 18px;

      img {
        height: 100%;
        object-fit: contain;
        width: 100%;
      }

      &:hover {
        border: solid 3px ${({ theme }) => theme.colors.orange};
      }
    }
  `
}

type ThumbnailProps = {
  setImage: Dispatch<SetStateAction<number>>
  image: number
}

export const Thumbnails = ({ setImage, image }: ThumbnailProps) => {
  const setActiveImage = (pos: number) => () => setImage(pos)

  return (
    <S.ThumbnailContainer>
      {IMAGES.map(({ src, name }, index) => {
        const pos = index + 1
        const isActive = pos === image

        return (
          <S.Thumbnails
            $isActive={isActive}
            onClick={setActiveImage(pos)}
            key={name}
          >
            <button type='button'>
              <Image src={`/${src}`} alt={name} height={90} width={90} />
            </button>
          </S.Thumbnails>
        )
      })}
    </S.ThumbnailContainer>
  )
}
