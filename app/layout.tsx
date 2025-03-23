import '../styles/globals.css'
import { ReactNode } from 'react'
import { LayoutClient } from '../components/Layout/Layout'
import StyledComponentsRegistry from '../lib/registry'

export default function LayoutComponent({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <LayoutClient>{children}</LayoutClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
