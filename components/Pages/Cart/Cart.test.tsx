import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { ThemeTestProvider } from '../../../styles/theme/ThemeTestProvider'
import { Cart } from './Cart'

describe('Cart component', () => {
  let cartItems = 0
  const setCartItems = jest.fn(() => (cartItems += 1))

  it('Render the Cart with no items', () => {
    const { getByTestId } = render(
      <ThemeTestProvider>
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </ThemeTestProvider>
    )
    expect(getByTestId('empty-cart')).toBeInTheDocument()
  })

  it('Render the Cart with item', () => {
    setCartItems()
    const { getByTestId } = render(
      <ThemeTestProvider>
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </ThemeTestProvider>
    )
    expect(getByTestId('product')).toBeInTheDocument()
  })

  it('Match the snapshot', () => {
    const tree = renderer
      .create(
        <ThemeTestProvider>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </ThemeTestProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
