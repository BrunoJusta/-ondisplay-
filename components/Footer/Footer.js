import footer from "../../styles/Footer.module.scss";
import { ContactsArea, ContactsForm } from "..";

const Footer = (props) => {
  const { form } = props;
  return (
    <div className={footer.container}>
      <ContactsForm />
      <footer className={footer.footer}>
        <a href="https://willbe.co" target="_blank" rel="noopener noreferrer">
          Ondisplay – 2021 | powered by
          <span className={footer.logo}>
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

export default Footer;
