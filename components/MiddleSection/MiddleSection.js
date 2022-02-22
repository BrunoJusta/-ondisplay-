import { CardMiddle, IconButton, MiniTitle, Title } from "..";
import middleSection from "../../styles/middleSection.module.scss";
import Image from "next/dist/client/image";

const MiddleSection = (props) => {
  return (
    <div className={`${middleSection.main} centerColumn`}>
      <div className={`${middleSection.goal} centerColumn`}>
        <MiniTitle text="como ajudamos?" />
        <Title text="Facilitamos o processo de criação dos seus ecrãs" />
        <div className={middleSection.cardContainer}>
          <CardMiddle text="Sinalização Digital" img="/signage.png" />
          <CardMiddle text="TV Corporativa" img="/corporative.png" />
        </div>
      </div>
      <div className={middleSection.goal}>
        <MiniTitle text="áreas de atuação" />
        <Title text="Ideial para todo o tipo de setores" />
        <div className={middleSection.cardContainer}>
          <IconButton text="restauração" img="/restauracao.png" />
          <IconButton text="hotelaria" img="/hotelaria.png" />
          <IconButton text="saúde" img="/saude.png" />
          <IconButton text="retalho" img="/retalho.png" />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
