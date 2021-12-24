import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Navbar } from '../components/Navbar/Navbar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Theme } from '../styles/theme/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState(0)

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Sidebar />
        <Navbar setCartItems={setCartItems} cartItems={cartItems} />
        <Component
          cartItems={cartItems}
          setCartItems={setCartItems}
          count={count}
          setCount={setCount}
          {...pageProps}
        />
      </ThemeProvider>
    </>
  )
}

export default MyApp
