import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import * as Root from '../index'
import { IMAGES } from '../../../data/images'

type ThumbnailProps = {
  setImage: Dispatch<SetStateAction<number>>
  image: number
}

export const Thumbnails = ({ setImage, image }: ThumbnailProps) => {
  return (
    <Root.ThumbnailContainer>
      {IMAGES.map(({ src, name }, index) => {
        const activeImage = index + 1
        return (
          <Root.Thumbnails
            className={(activeImage === image ? 'active' : '')}
            onClick={() => setImage(activeImage)}
            key={name}
          >
            <Image src={`/${src}`} alt={name} height={90} width={90} />
          </Root.Thumbnails>
        )
      })}
    </Root.ThumbnailContainer>
  )
}
