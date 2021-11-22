import { Button, MiniTitle, Title } from "../..";
import contactsArea from "../../../styles/ContactsArea.module.scss";

const ContactsArea = (props) => {
  return (
    <div className={contactsArea.containerFooter}>
      <div className={contactsArea.container}>
        <div className={contactsArea.card}>
          <img src="/lottie.gif" className={contactsArea.lottie} />
          <MiniTitle text="contactos" />
          <Title text="Entre em contacto" />
          <p className={contactsArea.cardText}>
            solução <b>100% cloud</b>
          </p>
          <Button text="Pedir Informações" link="/contacts" />
        </div>
      </div>
      <footer className={contactsArea.footer}>
        <a href="https://willbe.co" target="_blank" rel="noopener noreferrer">
          Ondisplay – 2021 | powered by
          <span className={contactsArea.logo}>
            <img
              src="/willbe.svg"
              style={{
                padding: "0px 10px 0px 10px",
              }}
            />
          </span>
          <b>willbe collective</b>
        </a>
      </footer>
    </div>
  );
};

export default ContactsArea;
