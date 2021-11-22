import button from "../../../styles/UI/Button.module.scss";
import Link from "next/link";

const Button = (props) => {
  const { text, link } = props;
  return (
    <Link href={link}>
      <div className={button.btn}>{text}</div>
    </Link>
  );
};

export default Button;
