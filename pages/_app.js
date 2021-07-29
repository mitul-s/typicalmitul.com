import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme.js";
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;
