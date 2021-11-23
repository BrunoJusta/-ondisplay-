import Head from "next/head";
import { ContactsForm, Footer, Waves } from "../components";
import contacts from "../styles/Contacts.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={contacts.main}>
      <Head>
        <title>Ondisplay - Digital Signage</title>
        <meta name="Ondisplay" content="Ondisplay - Digital Signage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <img className={contacts.logo} src="/ondisplay_dark.png" />
      </Link>
      <Footer form={true} />
    </div>
  );
}
