import Head from "next/head";
import details from "../styles/Details.module.scss";
import { Footer, DetailsSection, IconButton, Title } from "../components";

export default function Home(props) {
  return (
    <div className={details.detailsContent}>
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
      <DetailsSection
        icon="./hotel.svg"
        text="wowowowowowowo"
        backImg="./hotelaria.jpg"
        title="Hotelaria"
        items={[
          " apresentar e atualizar conteúdos;",
          " otimizar a comunicação no setor;",
          " responder às demandas da sociedade moderna.",
        ]}
      />
      <Title text="Descobrir mais setores" font="2" />
      <div className={details.detailsArea}>
        <IconButton
          text="Restauração"
          img="./restauracao.png"
          url="/restauracao"
        />
        <IconButton text="Retalho" img="./retalho.png" url="/retalho" />
        <IconButton text="Saúde" img="./saude.png" url="/saude" />
      </div>
      <Footer form={false} />
    </div>
  );
}
