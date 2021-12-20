import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { Root } from './index'
import { IMAGES } from '../../data/images'

type ThumbnailProps = {
  setImage: Dispatch<SetStateAction<number>>
  image: number
}

export const Thumbnails = ({ setImage }: ThumbnailProps) => {
  return (
    <Root.ThumbnailContainer>
      {IMAGES.map(({ src, name }, index) => {
        return (
          <Root.Thumbnails onClick={() => setImage(index+=1)} key={name}>
            <Image src={`/${src}`} alt={name} height={90} width={90} />
          </Root.Thumbnails>
        )
      })}
    </Root.ThumbnailContainer>
  )
}
