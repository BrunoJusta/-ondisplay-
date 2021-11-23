import features from "../../styles/Features.module.scss";
import { CardFeature, MiniTitle, Title } from "..";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FeaturesMobile = (props) => {
  const elementos = [
    {
      dot: "/dot.svg",
      text: "O ondisplay permite a criação de diversos ecrãs de sinalização digital",
      title: "Criar",
      img: "/create.png",
    },
    {
      dot: "/dot.svg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      title: "Apresentar",
      img: "/present.png",
    },
    {
      dot: "/dot.svg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      title: "Partilhar",
      img: "/share.png",
    },
  ];
  const [slides, setSlides] = useState([]);
  const [movement, setMovement] = useState(null);

  const [offset, setOffset] = useState(null);
  const [slidesWidth, setSlidesWidth] = useState(null);
  const [count, setCount] = useState(null);

  const sliderRef = useRef(null);
  const slidesRef = useRef(null);

  const gap = -55;

  const getTranslateX = (el) => {
    var matrix = new DOMMatrix(el.style.transform);
    return matrix.m41;
  };

  useEffect(() => {
    setCount(elementos.length);
    const sliderWidth = sliderRef.current.getBoundingClientRect().width;
    const slidesRefChilds = [...slidesRef.current.children];
    setSlidesWidth(
      (slidesRefChilds[0].getBoundingClientRect().width + gap) * count + gap
    );
    setOffset(Math.abs((sliderWidth - slidesWidth + gap * (count - 1)) / 2));
    setMovement(slidesRefChilds[0].getBoundingClientRect().width + gap);

    let tempSlides = [];
    slidesRefChilds.forEach((s, index) => {
      const posX =
        (s.getBoundingClientRect().width + gap) * index - offset - 15;
      const tempZIndex = index == 1 ? "30" : "0";
      index == 1 ? (s.style.zIndex = "30") : "0";
      // s.style.transformOrigin = "center";
      s.style.transform = ` translate3d(${posX}px ,0px, ${tempZIndex}px)`;
      tempSlides.push({
        active: "",
        x: posX,
        element: s,
      });
    });
    setSlides(tempSlides);
  }, [offset, slidesWidth, movement]);

  const handleClick = (dir) => {
    slides.forEach((s, index) => {
      let tempZIndex;

      const previousX = getTranslateX(s.element);
      if (previousX > -offset + slidesWidth / count) {
        tempZIndex = "0";
        s.element.style.zIndex = "0";
      } else {
        tempZIndex = "30";
        s.element.style.zIndex = "30";
      }
      if (previousX + movement > slidesWidth - offset) {
        s.element.style.transform = `translate3d(${-offset}px ,0px, ${tempZIndex}px)`;
      } else {
        s.element.style.transform = `translate3d(${
          previousX + movement
        }px ,0px, ${tempZIndex}px)`;
      }
    });
  };

  return (
    <div className={`${features.main} centerColumn`}>
      <MiniTitle text="como utilizar?" />
      <Title text="Funcionalidades" />
      <div className={features.slider} ref={sliderRef}>
        <div className={features.actions}>
          <div
            className={`${features.btn} ${features.btn_left}`}
            onClick={(e) => {
              handleClick(-1);
            }}
          >
            <FiChevronLeft />
          </div>
          <div
            className={`${features.btn} ${features.btn_right}`}
            onClick={(e) => {
              handleClick(1);
            }}
          >
            <FiChevronRight />
          </div>
        </div>
        <div className={features.slides} ref={slidesRef}>
          {elementos.map((el, index) => {
            return (
              <div className={features.slide} key={index}>
                <CardFeature
                  text={el.text}
                  title={el.title}
                  img={el.img}
                  dot={el.dot}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesMobile;
