import '../styles/globals.css'
import * as Tooltip from "@radix-ui/react-tooltip";

function MyApp({ Component, pageProps }) {
  return (
    <Tooltip.Provider>
      <Component {...pageProps} />
    </Tooltip.Provider>
  );
}

export default MyApp
