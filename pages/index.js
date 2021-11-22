import Head from "next/head";
import {
  ContactsArea,
  Features,
  Footer,
  Header,
  ImageMask,
  MiddleSection,
  Waves,
} from "../components";
import home from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Waves />
      <div className={home.container}>
        <Header />
        <MiddleSection />
        <Features />
      </div>
      <ContactsArea />
    </div>
  );
}
