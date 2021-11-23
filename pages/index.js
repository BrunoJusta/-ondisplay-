import Head from "next/head";
import {
  Features,
  FeaturesMobile,
  Footer,
  Header,
  MiddleSection,
  Waves,
} from "../components";
import useWindowSize from "../hooks/Dimensions";

export default function Home() {
  const windowSize = useWindowSize();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
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
      <Waves />
      <div
        className="centerColumn"
        style={{
          margin: "2rem",
        }}
      >
        <Header />
        <MiddleSection />
        {windowSize.width <= 1000 ? <FeaturesMobile /> : <Features />}
      </div>
      <Footer form={false} />
    </div>
  );
}
