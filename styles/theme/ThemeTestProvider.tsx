import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './Theme'

export const ThemeTestProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
