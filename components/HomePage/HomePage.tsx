'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Lightbox } from '../LightBox/Lightbox'
import { Thumbnails } from '../Thumbnail/Thumbnail'
import styled from 'styled-components'
import { useCart } from '../../contexts/CartContext'
import { breakpoints } from '../../styles'

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 100%;
  `,
  ProductContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    width: 100%;
    flex-direction: column;

    @media (min-width: ${breakpoints.md}) {
      padding: 50px 20px;
      flex-direction: row;
    }
  `,
  ImagesContainer: styled.div`
    flex: 1;
    margin: 60px 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: ${breakpoints.sm}) {
      margin: 0 0 2rem 0;
    }
    @media (min-width: ${breakpoints.md}) {
      margin: 2rem 0;
    }
    @media (min-width: ${breakpoints.lg}) {
      flex-direction: column;
      margin: 2rem 0;
    }
  `,
  BigImageContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    button {
      border: none;
      cursor: pointer;
      background: none;
    }

    img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }

    @media (min-width: ${breakpoints.sm}) {
      margin: 0 5rem;
      img {
        border-radius: 15px;
      }
    }
    @media (min-width: ${breakpoints.md}) {
      margin: 0 5rem;
      img {
        border-radius: 15px;
      }
    }
    @media (min-width: ${breakpoints.lg}) {
      margin: 0;
      img {
        border-radius: 15px;
      }
    }
  `,
  InfoContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1rem;
    @media (min-width: ${breakpoints.md}) {
      margin: 0 2rem;
    }
    @media (min-width: ${breakpoints.lg}) {
      margin: 0 3rem;
    }
  `,
  Price: styled.p`
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-size: 28px;
    color: black;
    font-weight: 800;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    span {
      margin-left: 10px;
      padding: 0px 10px;
      font-size: 18px;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.orange};
      background-color: hsl(25, 100%, 94%);
    }
  `,
  ProductInfo: styled.p`
    font-family: ${({ theme }) => theme.fonts.kumbh};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.light_gray};
    margin-bottom: 20px;
  `,
  SmallText: styled.p`
    font-family: ${({ theme }) => theme.fonts.kumbh};
    text-transform: uppercase;
    font-weight: 800;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.orange};
    margin-bottom: 18px;
  `,
  ProductTitle: styled.h1`
    font-family: ${({ theme }) => theme.fonts.kumbh};
    font-size: 40px;
    margin-bottom: 22px;

    @media (min-width: ${breakpoints.sm}) {
      font-size: 30px;
    }
  `,
  Discount: styled.p`
    margin-top: 10px;
    text-decoration: line-through;
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-weight: 800;
    color: hsl(220, 14%, 75%);
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;

    @media (min-width: ${breakpoints.lg}) {
      flex-direction: row;
    }
  `,
  AddToCart: styled.button`
    flex: 2;
    background-color: ${({ theme }) => theme.colors.orange};
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 13px;
    border-radius: 12px;
    border: none;
    outline: none;
    font-family: ${({ theme }) => theme.fonts.kumbh};
    font-weight: 800;
    color: white;
    cursor: pointer;
    padding: 17px 0;
    margin-top: 18px;

    @media (min-width: ${breakpoints.md}) {
      margin-top: 0;
    }
  `
}

export const Home = () => {
  const [image, setImage] = useState(1)
  const [isLightBox, setIsLightBox] = useState(false)
  const { handleAddToCart} = useCart()

  return (
    <S.Container>
      {isLightBox && (
        <Lightbox
          data-testid='lightbox'
          image={image}
          setImage={setImage}
          setIsLightBox={setIsLightBox}
        />
      )}

      <S.ProductContainer>
        <S.ImagesContainer>
          <S.BigImageContainer>
            <button>
              <Image
                src={`/image-product-${image}.jpg`}
                height={400}
                width={400}
                alt='Product 1'
                onClick={() => setIsLightBox(prev => !prev)}
              />
            </button>
          </S.BigImageContainer>
          <Thumbnails setImage={setImage} image={image} />
        </S.ImagesContainer>
        <S.InfoContainer data-testid='product-info'>
          <S.SmallText> Sneaker Company </S.SmallText>
          <S.ProductTitle> Fall Limited Edition Sneakers </S.ProductTitle>
          <S.ProductInfo>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </S.ProductInfo>
          <S.Price>
            $125.00 <span className='discount'> 50% </span>
          </S.Price>
          <S.Discount> $250.00 </S.Discount>
          <S.ButtonContainer>
            <ButtonGroup />
            <S.AddToCart
              type='button'
              data-testid='add-to-cart'
              onClick={handleAddToCart}
            >
              Add to cart
            </S.AddToCart>
          </S.ButtonContainer>
        </S.InfoContainer>
      </S.ProductContainer>
    </S.Container>
  )
}
