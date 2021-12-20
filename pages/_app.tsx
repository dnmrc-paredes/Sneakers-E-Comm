import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Navbar } from '../components/Navbar/Navbar'
import { Theme } from '../styles/theme/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={Theme} >
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
