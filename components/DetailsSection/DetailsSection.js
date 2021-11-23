import { FaDotCircle } from "react-icons/fa";
import { MiniTitle, Title } from "..";
import details from "../../styles/Details.module.scss";

import Link from "next/link";

const DetailsSection = (props) => {
  const { icon, text, backImg, title, items } = props;

  return (
    <div className={`${details.main} column`}>
      <Link href="/">
        <img className={details.logo} src="/logo.png" />
      </Link>
      <img className={details.banner} src={backImg} />
      <div className={`${details.content} row`}>
        <div className={`${details.contentLeft} column`}>
          <div className={`${details.contentTitle} centerRow`}>
            <img src={icon} className={details.icon} />
            <Title text={title} m="0" />
          </div>

          <p className="text">{text}</p>
        </div>

        <div className={`${details.contentRight} column`}>
          <MiniTitle text="Soluções" />
          <ul className={details.list}>
            {items.map((item, index) => (
              <li key={index} className={`${details.item} centerRow text`}>
                <FaDotCircle size={20} className={details.dots} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DetailsSection;
