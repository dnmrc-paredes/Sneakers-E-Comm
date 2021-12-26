import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import * as Base from './Cart.styles'
import { MdOutlineDelete } from 'react-icons/md'

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
            <Base.Item data-testid="product">
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
            <h4 data-testid="empty-cart"> Your cart is empty </h4>
          )}
        </Base.ItemsContainer>
        <Base.Button>Checkout</Base.Button>
      </Base.SubRoot>
    </Base.Root>
  )
}
