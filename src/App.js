import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { create } from 'jss';
import rtl from "jss-rtl";
import { JssProvider } from "react-jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

import Main from "./modules/Main";
import Intro from "./Intro";

const theme = createMuiTheme({
  palette: {
    container: {
      main: "#f1f1f1",
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
  direction: "rtl",
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div className="App">
          <Main />
        </div>
      </JssProvider>
    </ThemeProvider>
  );
};

export default App;
