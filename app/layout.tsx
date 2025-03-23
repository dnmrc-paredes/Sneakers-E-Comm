import '../styles/globals.css'
import { ReactNode } from 'react'
import { LayoutClient } from '../components/Layout/Layout'

export default function LayoutComponent({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
