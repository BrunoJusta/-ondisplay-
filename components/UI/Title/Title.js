import title from "../../../styles/UI/Title.module.scss";

const Title = (props) => {
  const { text, font } = props;
  return (
    <h2 className={title.title} style={{ fontSize: `${font}rem` }}>
      {text}
    </h2>
  );
};

export default Title;
