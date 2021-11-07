import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import '../Styles/globals.css';
import theme from '../theme';
import '@fontsource/poppins';
import '@fontsource/lemon';


function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>

}

export default MyApp
