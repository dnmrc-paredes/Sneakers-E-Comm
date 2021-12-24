import { Dispatch, SetStateAction, useEffect, useCallback } from 'react'
import * as Root from '../index'
import Image from 'next/image'
import * as Base from './Lightbox.styles'
import { Thumbnails } from '../Thumbnail/Thumbnail'

type LightBoxProps = {
  setIsLightBox: Dispatch<SetStateAction<boolean>>
  setImage: Dispatch<SetStateAction<number>>
  image: number
}

export const Lightbox = ({ setIsLightBox, setImage, image }: LightBoxProps) => {
  const prev = useCallback(() => {
    setImage(curr => (curr === 1 ? 4 : (curr -= 1)))
  }, [setImage])
  const next = useCallback(() => {
    setImage(curr => (curr === 4 ? 1 : (curr += 1)))
  }, [setImage])

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') {
        return next()
      }
      if (e.key === 'ArrowLeft') {
        return prev()
      }
    })
  }, [next, prev])

  return (
    <Base.Root>
      <Base.Container>
        <Base.CloseButton onClick={() => setIsLightBox(prev => !prev)}>
          <Image src='/icon-close.svg' width={13} height={13} alt='close' />
        </Base.CloseButton>
        <Root.ImagesContainer>
          <Base.BigImage>
            <Base.PrevButton onClick={prev}>
              <Image
                height={18}
                width={18}
                src='/icon-previous.svg'
                alt='prev'
              />
            </Base.PrevButton>
            <Image
              src={`/image-product-${image}.jpg`}
              height={400}
              width={400}
              alt='Product 1'
            />
            <Base.NextButton onClick={next}>
              <Image height={18} width={18} src='/icon-next.svg' alt='next' />
            </Base.NextButton>
          </Base.BigImage>
          <Thumbnails image={image} setImage={setImage} />
        </Root.ImagesContainer>
      </Base.Container>
    </Base.Root>
  )
}
