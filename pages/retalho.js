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
        icon="./bags.svg"
        text="O Retalho é um setor em constante mudança, os consumidores a definem-se cada vez mais pela experiência e estilo de vida que pela posse de bens. Com as tendências de consumo cada vez mais exigentes e a evolução exponencial da tecnologia o Ondisplay é a solução ideal."
        backImg="./hotelaria.jpg"
        title="Retalho"
        items={[
          "coerência de conteúdos nos diversos espaços;",
          "diferentes ecrãs no mesmo espaço;",
          "edição personalizada em tempo real;",
          "adaptável às necessidades dos clientes.",
        ]}
      />
      <Title text="Descobrir mais setores" font="2" />
      <div className={details.detailsArea}>
        <IconButton text="Hotelaria" img="./hotelaria.png" url="/hotelaria" />
        <IconButton
          text="Restauração"
          img="./restauracao.png"
          url="/restauracao"
        />
        <IconButton text="Saúde" img="./saude.png" url="/saude" />
      </div>
      <Footer form={false} />
    </div>
  );
}
