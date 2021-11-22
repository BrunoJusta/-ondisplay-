import cardFeature from "../../../styles/UI/cardFeature.module.scss";
import Image from "next/dist/client/image";

const CardFeature = (props) => {
  const { text, img, title, dot } = props;
  return (
    <div className={cardFeature.card}>
      <img src={dot} className={cardFeature.dot} />

      <h3 className={cardFeature.cardTitle}>{title}</h3>
      <img src={img} className={cardFeature.img} />
      <p className={cardFeature.cardText}>{text}</p>
    </div>
  );
};

export default CardFeature;
