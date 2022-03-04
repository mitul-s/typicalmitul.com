import '../styles/globals.css'
import { Provider } from "@radix-ui/react-tooltip";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
