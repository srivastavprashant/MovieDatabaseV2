import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Fonts from "./Allfont";

const breakpoints = createBreakpoints({
  sm: "40em", // 640px
  md: "52em", // 832px
  lg: "64em", // 1024px
  xl: "80em", // 1280px 
});


const theme = extendTheme({
  colors: {
    black: "#0D1317",
    white: "#EEF0F2", 
    primary: "#00072D", 
    secondary: "#43C6AC",
    grey: "#dddddd", 
    darkGrey: "#5C5D67"
  },
  fonts: {
    poppins: 'poppins'
  },
  breakpoints,
  shadows: { outline: "0 !important" }
});

export default theme;
