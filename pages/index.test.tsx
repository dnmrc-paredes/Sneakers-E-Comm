import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { ThemeTestProvider } from '../styles/theme/ThemeTestProvider'
import Index from './index'

describe('Home page', () => {
  let count = 0
  let cartItems = 0
  const setCartItems = jest.fn(() => cartItems++)
  const setCount = jest.fn(() => count++)

  it('It will render/show the home page', () => {
    const { getByTestId } = render(
      <ThemeTestProvider>
        <Index count={count} setCartItems={setCartItems} setCount={setCount} />
      </ThemeTestProvider>
    )
    expect(getByTestId('add-to-cart')).toBeInTheDocument()
    expect(getByTestId('product-info')).toBeInTheDocument()
  })

  it('It will match snapshot', () => {
    const tree = renderer.create(
      <ThemeTestProvider>
        <Index count={count} setCartItems={setCartItems} setCount={setCount} />
      </ThemeTestProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
