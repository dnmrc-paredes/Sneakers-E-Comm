import React from 'react'
import type { NextPage } from 'next'
import { Root } from '../components/Pages'
import Head from 'next/head'
import Image from 'next/image'
import BigImage from '../public/image-product-1.jpg'
import { ButtonGroup } from '../components/Pages/ButtonGroup'

const Home: NextPage = () => {
  return (
    <Root.Container>
      <Head>
        <title> Sneakers | A new walk of life </title>
      </Head>

      <Root.ProductContainer>
        <Root.ImagesContainer>
          <Image src={BigImage} height={400} width={400} alt="Product 1" />
        </Root.ImagesContainer>
        <Root.InfoContainer>
          <Root.SmallText> Sneaker Company </Root.SmallText>
          <Root.ProductTitle> Fall Limited Edition Sneakers </Root.ProductTitle>
          <Root.ProductInfo>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </Root.ProductInfo>
          <Root.Price> $125.00 <span> 50% </span> </Root.Price>
          <Root.Discount> $250.00 </Root.Discount>
          <Root.ButtonContainer>
            <ButtonGroup count={0} />
            <Root.AddToCart>
              Add to cart
            </Root.AddToCart>
          </Root.ButtonContainer>
        </Root.InfoContainer>
      </Root.ProductContainer>
    </Root.Container>
  )
}

export default Home
