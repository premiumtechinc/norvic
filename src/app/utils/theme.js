import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#007830",
    },
    secondary: {
      500: "#06af52",
    },
    accent: {
      500: "#9cae0f",
    },
  },
  fonts: {
    heading: "Josefin Sans",
    body: "Lato",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "primary.500",
      },
      a: {
        color: "primary.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
