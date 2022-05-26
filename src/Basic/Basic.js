import { useStyles } from "./style/BasicButtonStyle";

const Button = ({ children }) => {
  const classes = useStyles();
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

export const Basic = () => {
  return (
    <>
      <h2>Basic Jss</h2>
      <Button>Hello</Button>
    </>
  );
};
