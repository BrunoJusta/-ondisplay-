import iconButton from "../../../styles/UI/iconButton.module.scss";

const IconButton = (props) => {
  const { text, img } = props;
  return (
    <div className="column">
      <div className={iconButton.button}>
        <img src={img} className={iconButton.img} />
      </div>
      <p className={`${iconButton.text} text`}>{text}</p>
    </div>
  );
};

export default IconButton;
