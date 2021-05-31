import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { Provider as NextAuthProvider } from 'next-auth/client'
import dark from '../styles/themes/dark'
import { GlobalStyles } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <NextAuthProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
