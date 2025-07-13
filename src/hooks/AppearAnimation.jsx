// hooks/useAppearAnimation.js
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);



const AppearAnimation = ({
  xPercent = 0,
  yPercent = 0,
  duration = 1,
  ease = "power2.inOut",
  start = "top 100%",
  }) => {
  const elementRef = useRef(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    gsap.from(elementRef.current, {
      opacity: 0,
      xPercent,
      yPercent,
      duration,
      ease,
      scrollTrigger: {
        trigger: elementRef.current,
        start,
      },
    });
  }, [xPercent, yPercent, duration, ease, start]);

  return elementRef;
};



export default AppearAnimation;
