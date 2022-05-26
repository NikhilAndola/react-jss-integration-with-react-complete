import { createUseStyles } from "react-jss";

const PrefixClassStyle = createUseStyles(
  {
    myButton: {
      padding: (props) => props.spacing
    },
    myLabel: (props) => ({
      display: "block",
      color: props.labelColor,
      fontWeight: props.fontWeight,
      fontStyle: props.fontStyle
    })
  },
  { name: "Button" }
);

const Button = ({ children, ...props }) => {
  const classes = PrefixClassStyle(props);
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  spacing: 10,
  fontWeight: "bold",
  labelColor: "red"
};

export const Prefix = () => {
  return (
    <>
      <h2>Classname Prefix</h2>
      <Button labelColor="orange">prefixClassName</Button>
    </>
  );
};
