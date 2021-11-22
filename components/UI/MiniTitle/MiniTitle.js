import miniTitle from "../../../styles/UI/miniTitle.module.scss";

const MiniTitle = (props) => {
  const { text } = props;
  return <h3 className={miniTitle.miniTitle}>{text}</h3>;
};

export default MiniTitle;
