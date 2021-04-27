import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    500: "#007830",
  },
  secondary: {
    500: "#06af52",
  },
  accent: {
    500: "#9cae0f",
  },
  eggshell: {
    500: "#3F8F8FB",
  },
};

const fonts = {
  heading: "Josefin Sans",
  body: "Lato",
};

const styles = {
  global: {
    body: {
      bg: "eggshell.500",
      color: "primary.500",
    },
    a: {
      _hover: {
        // textDecoration: "underline",
      },
    },
  },
};

const theme = extendTheme({ colors, fonts, styles });

export default theme;
