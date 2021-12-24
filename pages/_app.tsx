import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Navbar } from '../components/Navbar/Navbar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Theme } from '../styles/theme/Theme'
import { useWindow } from '../hooks/useWindow'

function MyApp({ Component, pageProps }: AppProps) {
  const window = useWindow()
  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const isMobile = (window.width as number) < 762

  return (
    <>
      <ThemeProvider theme={Theme}>
        {isMobile && showMenu ? <Sidebar setShowMenu={setShowMenu} /> : null}
        <Navbar
          setShowMenu={setShowMenu}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
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
