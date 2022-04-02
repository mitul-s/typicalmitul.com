import '../styles/globals.css'
import * as Tooltip from "@radix-ui/react-tooltip";
import GuidingLines from '@/components/GuidingLines';
import  Navigation  from '@/components/Navigation';
import Footer from "@/sections/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Tooltip.Provider>
        <div className="relative min-h-full">
          <GuidingLines />
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Tooltip.Provider>
    </>
  );
}

export default MyApp
