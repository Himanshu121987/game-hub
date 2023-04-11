import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig={
    initialColorMode: 'dark'
};

const theme=extendTheme({config});//we pass config as object to access its property like ThemeConfig

export default theme;