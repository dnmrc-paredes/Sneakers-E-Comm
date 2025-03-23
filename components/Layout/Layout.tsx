'use client'

import { ReactNode, useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { useWindow } from '../../hooks/useWindow'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../../styles/theme/Theme'
import { Sidebar } from '../Sidebar/Sidebar'
import { CartContextProvider } from '../../contexts/CartContext'

export const LayoutClient = ({ children }: { children: ReactNode }) => {
  const window = useWindow()
  const [showMenu, setShowMenu] = useState(false)
  const isMobile = (window.width as number) < 762

  return (
    <ThemeProvider theme={Theme}>
      {isMobile && showMenu ? <Sidebar setShowMenu={setShowMenu} /> : null}
      <CartContextProvider>
        <Navbar setShowMenu={setShowMenu} />
        {children}
      </CartContextProvider>
    </ThemeProvider>
  )
}
