import cardFeature from "../../../styles/UI/cardFeature.module.scss";
import Image from "next/dist/client/image";
import { Title } from "..";

const CardFeature = (props) => {
  const { text, img, title, dot } = props;
  return (
    <div className={`${cardFeature.card} centerColumn`}>
      <img src={dot} className={cardFeature.dot} />
      <Title text={title} font={1.5} />
      <img src={img} className={cardFeature.img} />
      <p className={`${cardFeature.cardText} text`}>{text}</p>
    </div>
  );
};

export default CardFeature;
