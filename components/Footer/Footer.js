import footer from "../../styles/Footer.module.scss";
import { ContactsArea, ContactsForm } from "..";

const Footer = (props) => {
  const { form } = props;
  return (
    <div className={`${footer.container} column`}>
      <div className={footer.containerForm}>
        {form ? <ContactsForm /> : <ContactsArea />}
      </div>
      <footer className={footer.footer}>
        <a href="https://willbe.co" target="_blank" rel="noopener noreferrer">
          Ondisplay – 2021 | powered by
          <img className={footer.willbe} src="/willbe.svg" />
          <b>willbe collective</b>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
