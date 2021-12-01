import React from 'react'
import Image from 'next/image'
import { Root } from './index'
import { IMAGES } from '../../data/images'

export const Thumbnails = () => {
  return (
    <Root.ThumbnailContainer>
      {IMAGES.map(({ src, name }) => {
        return (
          <Root.Thumbnails key={name}>
            <Image src={`/${src}`} alt={name} height={90} width={90} />
          </Root.Thumbnails>
        )
      })}
    </Root.ThumbnailContainer>
  )
}
