import React from "react";
import { createMuiTheme, ThemeProvider, StylesProvider, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";


import Main from "./modules/Main";
import Intro from "./Intro";

const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    container: {
      main: "#f8f8f8",
      firstShadow: "#cdcdcd",
      secondShadow: "#ffffff",
    },
    primary: {
      main: "#0f5Ef7",
      dark: "#001847",
      text: "#fff",
    },
    secondary: {
      main: "#FA9B01",
      text: "#001847",
    },
  },
  typography: {
    fontFamily: `"iransansdn","Vazir", "Javan"`
  }
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


// Configure JSS
//const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
        <div className="App">
          <Main />
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
