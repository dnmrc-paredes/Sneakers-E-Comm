import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: string
      pale_orange: string
      light_gray: string
    }
    fonts: {
      nunito: string
      kumbh: string
    }
  }
}
