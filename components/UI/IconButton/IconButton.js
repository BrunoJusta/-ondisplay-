import iconButton from "../../../styles/UI/iconButton.module.scss";
import Link from "next/dist/client/link";

const IconButton = (props) => {
  const { text, img, url } = props;
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="column">
        <div className={iconButton.button}>
          <img src={img} className={iconButton.img} />
        </div>
        <p className={`${iconButton.text} text`}>{text}</p>
      </div>
    </Link>
  );
};

export default IconButton;
