import cardMiddle from "../../../styles/UI/cardMiddle.module.scss";
import Image from "next/dist/client/image";

const CardMiddle = (props) => {
  const { text, img } = props;
  return (
    <div className={cardMiddle.card}>
      <Image src={img} width={270} height={150} />
      <p className={cardMiddle.cardText}>{text}</p>
    </div>
  );
};

export default CardMiddle;
