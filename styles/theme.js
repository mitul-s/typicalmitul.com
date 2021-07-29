import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            bg: mode("#fff", "#000")(props),
        }
    })
}

const theme = extendTheme({
    styles,
    fonts: {
        body: "Helvetica",
    }
})

export default theme;