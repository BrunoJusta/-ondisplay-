import Head from "next/head";
import { ContactsForm, Footer, Waves } from "../components";
import contacts from "../styles/Contacts.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={contacts.main}>
      <Head>
        <title>OnDisplay - Sinalização Digital e TV Corporativa</title>
        <meta
          property="title"
          content="OnDisplay - Sinalização Digital e TV Corporativa"
          key="title"
        />
        <meta
          property="description"
          content="O OnDisplay é uma plataforma que permite criar e personalizar ecrãs de sinalização digital"
          key="description"
        />
        <meta
          property="keywords"
          content="OnDisplay, plataforma, criar, editar, apresentar, sinalização, personalizar, temas, widget, digital, tv, corporativa"
          key="keywords"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <img className={contacts.logo} src="/ondisplay_dark.png" />
      </Link>
      <Footer form={true} />
    </div>
  );
}
