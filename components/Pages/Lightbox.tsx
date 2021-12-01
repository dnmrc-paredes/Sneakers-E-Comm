import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants/colors'
import { Root } from './index'
import Image from 'next/image'
import { Thumbnails } from './Thumbnail'
import BigImage1 from '../../public/image-product-1.jpg'
import PreviousImg from '../../public/icon-previous.svg'
import NextImg from '../../public/icon-next.svg'
import CloseImg from '../../public/icon-close.svg'

const Base = {
  Root: styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Container: styled.div``,
  CloseButton: styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  `,
  BigImage: styled.div`
    position: relative;
    img {
      border-radius: 15px;
    }
    @media screen and (min-width: 0px) and (max-width: 500px) {
      margin: 25px;
    }
  `,
  PrevButton: styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 25px;
    padding: 8px;
    border: none;
    left: -5%;
    z-index: 2;
    top: 45%;
    cursor: pointer;
  `,
  NextButton: styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 25px;
    padding: 8px;
    border: none;
    position: absolute;
    right: -5%;
    z-index: 2;
    top: 45%;
    cursor: pointer;
  `
}

type LightBoxProps = {
  setIsLightBox: Dispatch<SetStateAction<boolean>>
}

export const Lightbox = ({ setIsLightBox }: LightBoxProps) => {
  return (
    <Base.Root>
      <Base.Container>
        <Base.CloseButton onClick={() => setIsLightBox((prev) => !prev)}>
          <Image color={COLORS.ORANGE} src={CloseImg} alt='close' />
        </Base.CloseButton>
        <Root.ImagesContainer>
          <Base.BigImage>
            <Base.PrevButton>
              <Image height={18} width={18} src={PreviousImg} alt='prev' />
            </Base.PrevButton>
            <Image src={BigImage1} height={400} width={400} alt='Product 1' />
            <Base.NextButton>
              <Image height={18} width={18} src={NextImg} alt='next' />
            </Base.NextButton>
          </Base.BigImage>
          <Thumbnails />
        </Root.ImagesContainer>
      </Base.Container>
    </Base.Root>
  )
}
