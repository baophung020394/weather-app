import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import {
  ChakraProvider,
  StyleFunctionProps,
  extendTheme,
} from "@chakra-ui/react";

const backgroundDark = "/assets/images/background/bg-dark.png";
const backgroundLight = "/assets/images/background/bg-light.png";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  light: {
    text: "#000000",
  },
  dark: {
    text: "#ffffff",
  },
};

const icons = {
  light: {
    search: "#6C40B5",
    bgIcon: "#ffffff",
    borderIcon: "#ffffff",
    bgSearchItem: "rgba(255, 255, 255, 0.4)",
    bgSearchIHistory: "rgba(255, 255, 255, 0.2)",
    bgWeather: "rgba(255, 255, 255, 0.2)",
    borderWeather: "rgba(255, 255, 255, 0.5)",
    colorCountryWeather: "rgba(102, 102, 102, 1)",
    colorDeg: "rgba(108, 64, 181, 1)",
    colorStatus: "rgba(102, 102, 102, 1)",
  },
  dark: {
    search: "#28124D",
    bgIcon: "transparent",
    borderIcon: "#FFFFFF66",
    bgSearchItem: "rgba(26, 26, 26, 0.5)",
    bgSearchIHistory: "rgba(26, 26, 26, 0.3)",
    bgWeather: "rgba(26, 26, 26, 0.3)",
    borderWeather: "rgba(26, 26, 26, 0.3)",
    colorCountryWeather: "rgba(255, 255, 255, 1)",
    colorDeg: "#ffffff",
    colorStatus: "#ffffff",
  },
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bgImage: props.colorMode === "dark" ? backgroundDark : backgroundLight,
        bgSize: "cover",
        color:
          props.colorMode === "dark" ? colors.dark.text : colors.light.text,
      },
    }),
  },
  colors: {
    brand: {
      light: colors.light.text,
      dark: colors.dark.text,
    },
    icons: {
      search: {
        light: icons.light.search,
        dark: icons.dark.search,
      },
      bgIcon: {
        light: icons.light.bgIcon,
        dark: icons.dark.bgIcon,
      },
      borderIcon: {
        light: icons.light.borderIcon,
        dark: icons.dark.borderIcon,
      },
      bgSearchItem: {
        light: icons.light.bgSearchItem,
        dark: icons.dark.bgSearchItem,
      },
      bgSearchIHistory: {
        light: icons.light.bgSearchIHistory,
        dark: icons.dark.bgSearchIHistory,
      },
      bgWeather: {
        light: icons.light.bgWeather,
        dark: icons.dark.bgWeather,
      },
      borderWeather: {
        light: icons.light.borderWeather,
        dark: icons.dark.borderWeather,
      },
      colorCountryWeather: {
        light: icons.light.colorCountryWeather,
        dark: icons.dark.colorCountryWeather,
      },
      colorDeg: {
        light: icons.light.colorDeg,
        dark: icons.dark.colorDeg,
      },
      colorStatus: {
        light: icons.light.colorStatus,
        dark: icons.dark.colorStatus,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
