import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Navbar } from '../components/Navbar/Navbar'
import { Theme } from '../styles/theme/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar count={count} />
        <Component count={count} setCount={setCount} {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
