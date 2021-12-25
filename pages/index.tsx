import React, { useState, Dispatch, SetStateAction } from 'react'
import type { NextPage } from 'next'
import * as Root from '../components/Pages'
import Head from 'next/head'
import Image from 'next/image'
import { ButtonGroup } from '../components/Pages/ButtonGroup/ButtonGroup'
import { Thumbnails } from '../components/Pages/Thumbnail/Thumbnail'
import { Lightbox } from '../components/Pages/LightBox/Lightbox'

type HomeProps = {
  count: number
  cartItems: number
  setCount: Dispatch<SetStateAction<number>>
  setCartItems: Dispatch<SetStateAction<number>>
}

const Home: NextPage<HomeProps> = ({ count, setCount, setCartItems }) => {
  const [image, setImage] = useState(1)
  const [isLightbox, setisLightBox] = useState(false)

  return (
    <Root.Container>
      <Head>
        <title> Sneakers | A new walk of life </title>
      </Head>

      {isLightbox && (
        <Lightbox
          image={image}
          setImage={setImage}
          setIsLightBox={setisLightBox}
        />
      )}

      <Root.ProductContainer>
        <Root.ImagesContainer>
          <Root.BigImageContainer>
            <Image
              src={`/image-product-${image}.jpg`}
              layout='intrinsic'
              height={400}
              width={400}
              alt='Product 1'
              onClick={() => setisLightBox((prev) => !prev)}
            />
          </Root.BigImageContainer>
          <Thumbnails setImage={setImage} image={image} />
        </Root.ImagesContainer>
        <Root.InfoContainer>
          <Root.SmallText> Sneaker Company </Root.SmallText>
          <Root.ProductTitle> Fall Limited Edition Sneakers </Root.ProductTitle>
          <Root.ProductInfo>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </Root.ProductInfo>
          <Root.Price>
            $125.00 <span className='discount'> 50% </span>
          </Root.Price>
          <Root.Discount> $250.00 </Root.Discount>
          <Root.ButtonContainer>
            <ButtonGroup setCount={setCount} count={count} />
            <Root.AddToCart onClick={() => {
              setCartItems((prev) => (prev += count))
              setCount(0)
            }} >Add to cart</Root.AddToCart>
          </Root.ButtonContainer>
        </Root.InfoContainer>
      </Root.ProductContainer>
    </Root.Container>
  )
}

export default Home
