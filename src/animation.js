import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const animateHero = (heroRef, titleRef) => {
  gsap.fromTo(
    heroRef.current,
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
  );

  gsap.fromTo(
    titleRef.current,
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
  );
};

export const animateSections = (sectionsRef) => {
  sectionsRef.current.forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      }
    );
  });
};
