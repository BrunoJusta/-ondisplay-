import { FaDotCircle } from "react-icons/fa";
import { MiniTitle, Title } from "..";
import details from "../../styles/Details.module.scss";
import Link from "next/link";

const DetailsSection = (props) => {
  const { icon, text, backImg, title, items } = props;

  return (
    <div className={details.main}>
      <Link href="/">
        <img className={details.logo} src="/logo.png" />
      </Link>
      <img className={details.banner} src={backImg} />
      <div className={details.content}>
        <img src={icon} className={details.icon} />
        <Title text={title} />
        <p className={details.text}>{text}</p>
        <MiniTitle text="Soluções" />
        <ul className={details.list}>
          {items.map((item, index) => (
            <li key={index} className={details.item}>
              <FaDotCircle className={details.dots} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DetailsSection;
