import "./Button.css";

const Button = (props) => {
  return (
    <a href={props.href} className="button">
      {props.children}
    </a>
  );
};

export default Button;
