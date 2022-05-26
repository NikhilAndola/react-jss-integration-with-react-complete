import { createUseStyles, useTheme, ThemeProvider } from "react-jss";

const useStylesFromThemeFunction = createUseStyles((theme) => ({
  button: {
    background: theme.colorPrimary
  },
  label: {
    fontWeight: "bold"
  }
}));

const Button1 = ({ children, ...props }) => {
  const classes = useStylesFromThemeFunction(props);
  return (
    <button className={classes.button}>
      <span className={classes.label}>{children}</span>
    </button>
  );
};

// Using function values might be better if you have only few theme dependant styles
// and also props or state is used for other values.
const useStylesTheme = createUseStyles({
  button: {
    background: ({ theme }) => theme.colorSecondary
  },
  label: {
    fontWeight: "bold"
  }
});

const Button2 = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStylesTheme({ ...props, theme });
  return (
    <button className={classes.button}>
      <span className={classes.label}>{children}</span>
    </button>
  );
};

const theme = {
  colorPrimary: "green",
  colorSecondary: "purple"
};

export const Theming = () => {
  return (
    <ThemeProvider theme={theme}>
      <h2>Theming</h2>
      <Button1>I am a button 1 with green background</Button1>
      <Button2>I am a button 2 with green background</Button2>
    </ThemeProvider>
  );
};
