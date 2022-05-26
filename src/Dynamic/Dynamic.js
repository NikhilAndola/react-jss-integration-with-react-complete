import { createUseStyles } from "react-jss";

export const useStylesDynamic = createUseStyles({
  myButton: {
    padding: (props) => props.spacing
  },
  myLabel: (props) => ({
    display: "block",
    color: props.labelColor,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle
  })
});

const Button = ({ children, ...props }) => {
  const classes = useStylesDynamic(props);
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

export const Dynamic = () => {
  return (
    <>
      <h2>Dynamic jss</h2>
      <Button spacing="20px">Dynamic Button</Button>
    </>
  );
};
