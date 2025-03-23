import { Dispatch, SetStateAction, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Thumbnails } from '../Thumbnail/Thumbnail'
import { breakpoints } from '../../styles'

const S = {
  Root: styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  CloseButton: styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    padding: 0 30px;

    button {
      background: white;
      height: 26px;
      width: 26px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;
    }
  `,
  BigImage: styled.div`
    position: relative;
    img {
      border-radius: 15px;
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
    @media (min-width: ${breakpoints.md}) {
      margin: 0 25px;
    }
  `,
  PrevButton: styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 25px;
    padding: 8px;
    height: 40px;
    width: 40px;
    border: none;
    left: -5%;
    z-index: 2;
    top: 45%;
    cursor: pointer;
  `,
  NextButton: styled.button`
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 100%;
    padding: 8px;
    border: none;
    position: absolute;
    height: 40px;
    width: 40px;
    right: -5%;
    z-index: 2;
    top: 45%;
    cursor: pointer;
  `,
  ImagesContainer: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
  `
}

type LightBoxProps = {
  setIsLightBox: Dispatch<SetStateAction<boolean>>
  setImage: Dispatch<SetStateAction<number>>
  image: number
}

export const Lightbox = ({ setIsLightBox, setImage, image }: LightBoxProps) => {
  const prev = useCallback(() => {
    setImage(curr => (curr === 1 ? 4 : curr - 1))
  }, [setImage])
  const next = useCallback(() => {
    setImage(curr => (curr === 4 ? 1 : curr + 1))
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
    <S.Root>
      <S.Wrapper>
        <S.CloseButton>
          <button onClick={() => setIsLightBox(prev => !prev)} type='button'>
            <Image src='/icon-close.svg' width={13} height={13} alt='close' />
          </button>
        </S.CloseButton>
        <S.ImagesContainer>
          <S.BigImage>
            <S.PrevButton onClick={prev}>
              <Image
                height={18}
                width={18}
                src='/icon-previous.svg'
                alt='prev'
              />
            </S.PrevButton>
            <Image
              src={`/image-product-${image}.jpg`}
              height={400}
              width={400}
              alt='Product 1'
            />
            <S.NextButton onClick={next}>
              <Image height={18} width={18} src='/icon-next.svg' alt='next' />
            </S.NextButton>
          </S.BigImage>
          <Thumbnails image={image} setImage={setImage} />
        </S.ImagesContainer>
      </S.Wrapper>
    </S.Root>
  )
}
