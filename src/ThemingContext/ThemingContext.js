import React from "react";
import { createUseStyles, createTheming } from "react-jss";

const ThemeContext = React.createContext({});

// Creating a namespaced theming object.
const theming = createTheming(ThemeContext);

// Note that `useTheme` here comes from the `theming` object, NOT from `react-jss` import.
const { ThemeProvider, useTheme } = theming;

const useStyles = createUseStyles(
  {
    button: {
      background: ({ theme }) => theme.colorPrimary
    }
    // Passing theming object to `createUseStyles()`
  },
  { theming }
);

const myTheme = {
  colorPrimary: "green"
};

const Button = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });
  return <button className={classes.button}>{children}</button>;
};

const OtherLibraryThemeProvider = () => null;
const OtherLibraryComponent = () => null;
const otherLibraryTheme = {};

// Using namespaced ThemeProviders - they can be nested in any order
export const ThemingApp = () => (
  <OtherLibraryThemeProvider theme={otherLibraryTheme}>
    <OtherLibraryComponent />
    <ThemeProvider theme={myTheme}>
      <Button>Green Button</Button>
    </ThemeProvider>
  </OtherLibraryThemeProvider>
);
