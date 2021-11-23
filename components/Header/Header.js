import header from "../../styles/Header.module.scss";

const Header = (props) => {
  return (
    <div className={`${header.main} centerColumn`}>
      <img src="/logo.png" className={header.logo} />
      <h1 className={header.title}>
        Comunicação <br />
        digital personalizada!
      </h1>
      <p className={`${header.text} text`} style={{ marginTop: "30px" }}>
        Ondisplay é um software cloud que permite criação e apresentação de
        ecrãs digitais que ajudam a comunicação do seu negócio.
      </p>
      <img src="/ondisplay.png" className={header.img} />
    </div>
  );
};

export default Header;
