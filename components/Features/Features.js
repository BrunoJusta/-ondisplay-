import features from "../../styles/Features.module.scss";
import { CardFeature, MiniTitle, Title } from "..";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Features = (props) => {
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

  const gap = -100;

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
    // setOffset(Math.abs((sliderWidth - slidesWidth + gap * (count - 1)) / 2));
    setOffset(+gap * count);

    // console.log(slidesWidth);
    setMovement(slidesRefChilds[0].getBoundingClientRect().width + gap);

    let tempSlides = [];
    slidesRefChilds.forEach((s, index) => {
      const posX = (s.getBoundingClientRect().width + gap) * index + offset;
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

      console.log(slidesWidth);
      console.log(s.element.getBoundingClientRect().x);
      const previousX = getTranslateX(s.element);
      console.log("previous", previousX);
      if (previousX > offset + slidesWidth / count) {
        tempZIndex = "0";
        s.element.style.zIndex = "0";
      } else {
        tempZIndex = "30";
        s.element.style.zIndex = "30";
      }
      if (previousX + movement > slidesWidth + offset) {
        s.element.style.transform = `translate3d(${offset}px ,0px, ${tempZIndex}px)`;
      } else {
        s.element.style.transform = `translate3d(${
          previousX + movement
        }px ,0px, ${tempZIndex}px)`;
      }
    });
  };

  return (
    <div className={features.main}>
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

export default Features;

// import features from "../../styles/Features.module.scss";
// import { CardFeature, MiniTitle, Title } from "..";
// import { useEffect, useRef, useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// /*
// <CardFeature
//           text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
//           title="criar"
//           img="/create.png"
//         />
// */

// const Features = (props) => {
//   const elementos = [
//     {
//       dot: "/dot.svg",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       title: "Criar",
//       img: "/create.png",
//     },
//     {
//       dot: "/dot.svg",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       title: "Apresentar",
//       img: "/present.png",
//     },
//     {
//       dot: "/dot.svg",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       title: "Partilhar",
//       img: "/share.png",
//     },
//     {
//       dot: "/dot.svg",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       title: "Criar",
//       img: "/create.png",
//     },
//     {
//       dot: "/dot.svg",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       title: "Apresentar",
//       img: "/present.png",
//     },
//     {
//       dot: "/dot.svg",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       title: "Apresentar",
//       img: "/present.png",
//     },
//     {
//       dot: "/dot.svg",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       title: "Apresentar",
//       img: "/present.png",
//     },
//     {
//       dot: "/dot.svg",
//       text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       title: "Apresentar",
//       img: "/present.png",
//     },
//   ];
//   const [slides, setSlides] = useState([]);
//   const [movement, setMovement] = useState(null);

//   const [offset, setOffset] = useState(null);
//   const [slidesWidth, setSlidesWidth] = useState(null);
//   const [count, setCount] = useState(null);

//   const sliderRef = useRef(null);
//   const slidesRef = useRef(null);

//   const gap = 10;

//   const getTranslateX = (el) => {
//     var matrix = new DOMMatrix(el.style.transform);
//     return matrix.m41;
//   };

//   useEffect(() => {
//     setCount(elementos.length);
//     const sliderWidth = sliderRef.current.getBoundingClientRect().width;
//     const slidesRefChilds = [...slidesRef.current.children];
//     setSlidesWidth(
//       (slidesRefChilds[0].getBoundingClientRect().width + gap) * count - gap
//     );
//     setOffset(Math.abs(sliderWidth - slidesWidth / 2));
//     // console.log(slidesWidth);
//     setMovement(slidesRefChilds[0].getBoundingClientRect().width + gap);

//     let tempSlides = [];
//     slidesRefChilds.forEach((s, index) => {
//       const posX = (s.getBoundingClientRect().width + gap) * (index - 1);
//       // const tempZIndex = index == 1 ? "30" : "0";
//       // const tempZIndex = 1;
//       // s.style.transformOrigin = "center";
//       s.style.transform = ` translate3d(${posX}px ,0px, ${0}px)`;
//       tempSlides.push({
//         active: "",
//         x: posX,
//         element: s,
//       });
//     });
//     setSlides(tempSlides);
//   }, [offset, slidesWidth, movement]);

//   const handleClick = (dir) => {
//     slides.forEach((s, index) => {
//       console.log(slidesWidth);
//       console.log(s.element.getBoundingClientRect().x);
//       const previousX = getTranslateX(s.element);
//       console.log("previous", previousX);
//       if (previousX + movement > slidesWidth - 410) {
//         s.element.style.transform = `translateX(${-410}px)`;
//       } else {
//         s.element.style.transform = `translateX(${previousX + movement}px)`;
//       }
//       // const initialPos = s.element.getBoundingClientRect().x;
//       // console.log("width" + slidesWidth);
//       // console.log(index + " " + initialPos);
//       // if (dir == 1) {
//       //   if (initialPos > slidesWidth - gap + 100) {
//       //     s.element.style.transform = `translateX(${0}px)`;
//       //   } else {
//       //     s.element.style.transform = `translateX(${initialPos + 150}px)`;
//       //     console.log(index + " " + s.element.getBoundingClientRect().x);
//       //   }
//       // }
//       // if (dir == -1) {
//       //   if (initialPos < offset + 100) {
//       //     s.element.style.transform = `translate3d(${
//       //       slides[2].x + offset
//       //     }px, 0px , ${
//       //       initialPos > slides[0].x + 100 && initialPos < slides[2].x + 100
//       //         ? "0"
//       //         : "30"
//       //     }px)`;
//       //   } else {
//       //     s.element.style.transform = `translate3d(${
//       //       initialPos + movement * dir
//       //     }px, 0px , ${
//       //       initialPos > slides[0].x + 100 && initialPos < slides[2].x + 100
//       //         ? "0"
//       //         : "30"
//       //     }px)`;
//       //   }
//       // }
//     });
//   };
//   // useEffect(() => {
//   //   const count = elementos.length;
//   //   const sliderWidth = sliderRef.current.getBoundingClientRect().width;
//   //   const slidesRefChilds = [...slidesRef.current.children];

//   //   const gap = -100;
//   //   setSlidesWidth(
//   //     (slidesRefChilds[0].getBoundingClientRect().width + gap) * count - gap
//   //   );
//   //   setOffset(Math.abs(sliderWidth - slidesWidth) / 2);
//   //   // console.log(slidesWidth);
//   //   setMovement(slidesRefChilds[0].getBoundingClientRect().width + gap);
//   //   let tempSlides = [];
//   //   slidesRefChilds.forEach((s, index) => {
//   //     const posX = (s.getBoundingClientRect().width + gap) * index;
//   //     const tempZIndex = index == 1 ? "30" : "0";
//   //     // const tempZIndex = 1;
//   //     // s.style.transformOrigin = "center";
//   //     s.style.transform = ` translate3d(${
//   //       posX + offset
//   //     }px ,0px, ${tempZIndex}px)`;
//   //     tempSlides.push({
//   //       active: "",
//   //       x: posX,
//   //       element: s,
//   //     });
//   //   });
//   //   setSlides(tempSlides);
//   // }, [offset, slidesWidth, movement]);

//   // const handleClick = (dir) => {
//   //   slides.forEach((s, index) => {
//   //     const initialPos = s.element.getBoundingClientRect().x;
//   //     if (dir == 1) {
//   //       if (initialPos > slides[slides.length - 1].x - 100) {
//   //         s.element.style.transform = `translate3d(${
//   //           slides[0].x + offset
//   //         }px, 0px , ${
//   //           initialPos > slides[0].x + 50 && initialPos < slides[1].x + 50
//   //             ? "30"
//   //             : "0"
//   //         }px)`;
//   //       } else {
//   //         s.element.style.transform = `translate3d(${
//   //           initialPos + movement * dir
//   //         }px, 0px , ${
//   //           initialPos > slides[0].x + 100 && initialPos < slides[1].x + 100
//   //             ? "30"
//   //             : "0"
//   //         }px)`;
//   //       }
//   //     }
//   //     if (dir == -1) {
//   //       if (initialPos < offset + 100) {
//   //         s.element.style.transform = `translate3d(${
//   //           slides[2].x + offset
//   //         }px, 0px , ${
//   //           initialPos > slides[0].x + 100 && initialPos < slides[2].x + 100
//   //             ? "0"
//   //             : "30"
//   //         }px)`;
//   //       } else {
//   //         s.element.style.transform = `translate3d(${
//   //           initialPos + movement * dir
//   //         }px, 0px , ${
//   //           initialPos > slides[0].x + 100 && initialPos < slides[2].x + 100
//   //             ? "0"
//   //             : "30"
//   //         }px)`;
//   //       }
//   //     }
//   //   });
//   // };

//   return (
//     <div className={features.main}>
//       <MiniTitle text="como utilizar o ondisplay" />
//       <Title text="Funcionalidades" />
//       <div className={features.slider} ref={sliderRef}>
//         <div className={features.actions}>
//           <div
//             className={`${features.btn} ${features.btn_left}`}
//             onClick={(e) => {
//               handleClick(-1);
//             }}
//           >
//             <FiChevronLeft />
//           </div>
//           <div
//             className={`${features.btn} ${features.btn_right}`}
//             onClick={(e) => {
//               handleClick(1);
//             }}
//           >
//             <FiChevronRight />
//           </div>
//         </div>
//         <div className={features.slides} ref={slidesRef}>
//           {elementos.map((el, index) => {
//             return (
//               <div className={features.slide} key={index}>
//                 <CardFeature
//                   text={el.text}
//                   title={el.title}
//                   img={el.img}
//                   dot={el.dot}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;
