// hooks/useScrollAnimation.js
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const SlideAnimation = (ref, { xPercent = 0, yPercent = 0, duration = 1, ease = "power2.inOut" }) => {
  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        xPercent,
        yPercent,
        opacity: 0,
        duration,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, xPercent, yPercent, duration, ease]);
};

export default SlideAnimation;
