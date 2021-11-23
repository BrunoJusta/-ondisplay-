import { Button, MiniTitle, Title } from "../..";
import contactsArea from "../../../styles/ContactsArea.module.scss";

const ContactsArea = (props) => {
  return (
    <div className={`${contactsArea.container} centerRow`}>
      <div className={`${contactsArea.card} centerColumn`}>
        <img src="/lottie.gif" className={contactsArea.lottie} />
        <MiniTitle text="contactos" />
        <Title text="Entre em contacto" />
        <p className={`${contactsArea.cardText} text`}>
          solução <b>100% cloud</b>
        </p>
        <Button text="Pedir Informações" link="/contacts" />
      </div>
    </div>
  );
};

export default ContactsArea;
