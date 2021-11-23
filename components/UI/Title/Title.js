import title from "../../../styles/UI/Title.module.scss";

const Title = (props) => {
  const { text, font, m } = props;
  return (
    <h2
      className={title.title}
      style={{ fontSize: `${font}rem`, marginBottom: `${m}px` }}
    >
      {text}
    </h2>
  );
};

export default Title;
