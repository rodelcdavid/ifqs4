import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",

        "& *::-webkit-scrollbar": {
          height: "7px",
          width: "7px",
        },
        "& *::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "& *::-webkit-scrollbar-thumb": {
          background: "#888",
        },
      },
      body: {
        minHeight: "100vh",
      },
    },
  },
});

export default theme;
