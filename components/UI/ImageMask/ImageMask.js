import home from "../../../styles/Home.module.scss";
import { useEffect, useRef } from "react";

{
  /* <ImageMask
              backImg="https://www.bruno-justa.me/img/me2.8bc0d4ee.png"
              frontImg="https://www.bruno-justa.me/img/me3.8dd6c839.png"
            /> */
}

const ImageMask = (props) => {
  const ClipRef = useRef(null);

  useEffect(() => {
    const clipRef = ClipRef.current;
    clipRef.onmousemove = function (e) {
      handleImgMask(e, true);
    };

    clipRef.onmouseleave = function (e) {
      handleImgMask(e, false);
    };
  }, []);

  const handleImgMask = (e, isOn) => {
    const clipRef = ClipRef.current;

    if (isOn == true) {
      clipRef.style.clipPath = `circle(20% at ${e.offsetX}px ${e.offsetY}px)`;
      clipRef.style.transition = "all 0ms ease-in-out";
    } else {
      clipRef.style.clipPath = `circle(5% at 0px 50%)`;
      clipRef.style.transition = "all 400ms ease-in-out";
    }
  };

  const { backImg, frontImg } = props;
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
      }}
    >
      <img className={home.image_2} src={backImg} />
      <img ref={ClipRef} className={home.image_1} src={frontImg} />
    </div>
  );
};

export default ImageMask;
