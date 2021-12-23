import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { MdOutlineDelete } from 'react-icons/md'

const Base = {
  Root: styled.div`
    position: absolute;
    width: 340px;
    top: 50px;
    right: -120px;
    box-shadow: 0px 1px 120px 1px #c4c3c3;
    z-index: 10;
    border-radius: 8px;
    @media screen and (min-width: 300px) and (max-width: 550px) {
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      bottom: 0;
      transform: none;
      width: 100%;
      height: max-content;
      box-shadow: none;
      /* width: max-content; */
    }
    @media screen and (min-width: 551px) and (max-width: 768px) {
      right: -20px;
    }
    @media screen and (min-width: 769px) and (max-width: 1000px) {
      right: -60px;
    }
  `,
  SubRoot: styled.div`
    border-radius: 8px;
    background-color: white;
    @media screen and (min-width: 300px) and (max-width: 550px) {
      margin: 20px 10px;
    }
  `,
  TitleContainer: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: solid #c4c3c3 1px;

    h4 {
      margin: 0.5rem 1rem;
      font-family: ${({ theme }) => theme.fonts.kumbh};
    }
  `,
  ItemsContainer: styled.div`
    flex: 2;
    display: flex;
    padding: 1rem 0;
    margin: 0.5rem 1rem;

    h4 {
      margin: auto;
      font-family: ${({ theme }) => theme.fonts.kumbh};
      color: ${({ theme }) => theme.colors.light_gray};
    }
  `,
  Item: styled.div`
    display: flex;

    img {
      border-radius: 5px;
    }
  `,
  ImageContainer: styled.div`
    flex: 1;
  `,
  Info: styled.div`
    flex: 2;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    .info {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;

      h4,
      p {
        font-family: ${({ theme }) => theme.fonts.kumbh};
        font-weight: 400;

        span {
          font-weight: 800;
        }
      }
    }
    .delete {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
    }
  `,
  Button: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    height: 50px;
    width: 90%;
    margin: 0.5rem 1rem;
    border: none;
    outline: none;
    font-family: ${({ theme }) => theme.fonts.kumbh};
    font-weight: 700;
    letter-spacing: 1px;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 15px;
  `
}

type CartProps = {
  cartItems: number
  setCartItems: Dispatch<SetStateAction<number>>
}

export const Cart = ({ cartItems, setCartItems }: CartProps) => {
  return (
    <Base.Root>
      <Base.SubRoot>
        <Base.TitleContainer>
          <h4> Cart </h4>
        </Base.TitleContainer>
        <Base.ItemsContainer>
          {cartItems ? (
            <Base.Item>
              <Image
                src='/image-product-1-thumbnail.jpg'
                width={50}
                height={50}
                alt='product'
              />
              <Base.Info>
                <div className='info'>
                  <h4> Fall Limited Edition Sneakers </h4>
                  <p>
                    $125.00 x {cartItems} <span> ${125.0 * cartItems} </span>
                  </p>
                </div>
                <div className='delete'>
                  <MdOutlineDelete
                    onClick={() => setCartItems(0)}
                    color='grey'
                    size={20}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </Base.Info>
            </Base.Item>
          ) : (
            <h4> Your cart is empty </h4>
          )}
        </Base.ItemsContainer>
        <Base.Button>Checkout</Base.Button>
      </Base.SubRoot>
    </Base.Root>
  )
}
