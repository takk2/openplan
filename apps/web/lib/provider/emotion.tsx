'use client'

import { Global, ThemeProvider } from '@emotion/react'
import { globals } from '@repo/ui/styles/global.ts'
import theme from '@repo/ui/styles/theme/index.ts'
import { PropsWithChildren } from 'react'

declare module '@emotion/react' {
  export interface Theme {
    mediaQuery: {
      tablet: string
      mobile: string
      desktop: string
    }
  }
}

const EmotionProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globals} />
      {children}
    </ThemeProvider>
  )
}

export default EmotionProvider
