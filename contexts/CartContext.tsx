'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
  createContext
} from 'react'
const initialState = {
  count: 0,
  cartItems: 0,
  setCount: () => {},
  setCartItems: () => {},
  handleAddToCart: () => {}
}

type CartContextProps = {
  count: number
  cartItems: number
  setCount: Dispatch<SetStateAction<number>>
  setCartItems: Dispatch<SetStateAction<number>>
  handleAddToCart: () => void
}

const CartContext = createContext<CartContextProps>(initialState)

export const useCart = () => useContext(CartContext)

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState(0)

  const handleAddToCart = () => {
    setCartItems(prev => prev + count)
    setCount(0)
  }

  const value = useMemo(
    () => ({
      count,
      setCount,
      cartItems,
      setCartItems,
      handleAddToCart
    }),
    [count, cartItems]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
