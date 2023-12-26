import classNames from "classnames";
import classes from "./Button.module.scss";

interface IButton {
  background: string;
  value: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<IButton> = (props) => {
  const style = classNames({
    [classes.backgroundBlue]: props.background === 'blue',
    [classes.backgroundGrey]: props.background === 'gray',
    [classes.backgroundGreen]: props.background === 'green',
    [classes.button]: true,
  });

  return (
    <button disabled={props.disabled} type="submit" className={style} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Button;
